type MessageType = "image" | "audio" | "text" | "video";

type Message = {
  id: number;
  type: MessageType;
  sendMessage: string;
};

const messages: Message[] = [
  {
    id: 1,
    type: "image",
    sendMessage: "Manu"
  },
  {
    id: 2,
    type: "audio",
    sendMessage: "Tim"
  },
  {
    id: 3,
    type: "text",
    sendMessage: "Tony"
  },
  {
    id: 4,
    type: "video",
    sendMessage: "Pop"
  }
];

function getMessage(value: number, myName: string): Message;
function getMessage(value: MessageType, readRecordCount: number): Message[];
function getMessage(value1: any, value2: any) {
  if (typeof value1 === "number") {
    return messages.find(message => message.id === value1);
  } else {
    return messages
      .filter(message => message.type === value1)
      .splice(0, value2);
  }
}
