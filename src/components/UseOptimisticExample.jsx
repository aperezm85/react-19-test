import { useState, useOptimistic, useRef } from "react";

async function deliverMessage(message) {
  await new Promise((res, rej) => setTimeout(rej, 1000));
  return message;
}

export function UseOptimisticExample() {
  const formRef = useRef();

  const [messages, setMessage] = useState([
    { text: "Hello world!", sending: false, key: 1 },
  ]);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  async function formAction(formData) {
    formRef.current.reset();

    addOptimisticMessage(formData.get("message"));
    try {
      const sentMessage = await deliverMessage(formData.get("message"));
      setMessage((messages) => [...messages, { text: sentMessage }]);
    } catch (e) {
      setMessage(messages);
    }
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small>(Sending...)</small>}
        </div>
      ))}

      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
