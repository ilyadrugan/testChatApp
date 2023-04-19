export const chatList = {
  chat_list: [
    {
      chat_id: 1,
      participants: [
        {
          user_id: 1,
          username: "johndoe",
          avatar:
            "https://avatars.mds.yandex.net/i?id=921d5a3910f248fccce7618bd0bae631dcdf566c-9221937-images-thumbs&n=13",
        },
        {
          user_id: 2,
          username: "janedoe",
          avatar:
            "https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13",
        },
      ],
      messages: [
        {
          timestamp: "2023-04-18T12:34:56Z",
          sender_id: 2,
          receiver_id: 1,
          message: "Hey John, how are you doing today?",
          attachment: "",
        },
        {
          timestamp: "2023-04-18T12:45:12Z",
          sender_id: 1,
          receiver_id: 2,
          message: "I'm doing good, thanks for asking! How about you?",
          attachment:
            "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
        {
          timestamp: "2023-04-18T13:10:23Z",
          sender_id: 2,
          receiver_id: 1,
          message: "I'm doing well too. Just wanted to check in and say hi!",
          attachment: "",
        },
      ],
    },
    {
      chat_id: 2,
      participants: [
        {
          user_id: 1,
          username: "johndoe",
          avatar:
            "https://avatars.mds.yandex.net/i?id=921d5a3910f248fccce7618bd0bae631dcdf566c-9221937-images-thumbs&n=13",
        },
        {
          user_id: 3,
          username: "jimmy",
          avatar:
            "https://avatars.mds.yandex.net/i?id=dae279f2038714623e14b0c3cb32520eaeb21e64-9099160-images-thumbs&n=13",
        },
      ],
      messages: [
        {
          timestamp: "2023-04-17T09:12:34Z",
          sender_id: 3,
          receiver_id: 1,
          message: "John, can you help me with this project?",
          attachment:
            "https://static.videezy.com/system/resources/previews/000/037/501/original/Hi-Tech_HUD__global_warming_concept_00352.mp4",
        },
        {
          timestamp: "2023-04-17T09:34:56Z",
          sender_id: 1,
          receiver_id: 3,
          message: "Sure thing Jimmy! What do you need help with?",
          attachment: "",
        },
        {
          timestamp: "2023-04-17T10:15:23Z",
          sender_id: 3,
          receiver_id: 1,
          message:
            "I need some advice on the design. Can I send you some sketches?",
          attachment: "",
        },
        {
          timestamp: "2023-04-17T10:35:12Z",
          sender_id: 1,
          receiver_id: 3,
          message: "Of course, feel free to send them over and we can discuss!",
          attachment: "",
        },
      ],
    },
    {
      chat_id: 3,
      participants: [
        {
          user_id: 1,
          username: "johndoe",
          avatar:
            "https://avatars.mds.yandex.net/i?id=921d5a3910f248fccce7618bd0bae631dcdf566c-9221937-images-thumbs&n=13",
        },
        {
          user_id: 4,
          username: "jenny",
          avatar:
            "data:image/jpeg;base64,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",
        },
      ],
      messages: [
        {
          timestamp: "2023-04-16T18:43:21Z",
          sender_id: 1,
          receiver_id: 4,
          message: "Jenny, are you free for lunch tomorrow?",
          attachment: "",
        },
        {
          timestamp: "2023-04-16T18:45:12Z",
          sender_id: 4,
          receiver_id: 1,
          message:
            "Sorry John, I already have plans tomorrow. Maybe we can do lunch another day?",
          attachment: "",
        },
        {
          timestamp: "2023-04-16T19:10:23Z",
          sender_id: 1,
          receiver_id: 4,
          message:
            "No worries, we can reschedule for next week. How does next Tuesday work for you?",
          attachment: "",
        },
        {
          timestamp: "2023-04-16T19:15:34Z",
          sender_id: 4,
          receiver_id: 1,
          message: "That works for me! Let's plan on lunch next Tuesday.",
          attachment:
            "https://static.videezy.com/system/resources/previews/000/037/795/original/DH064.mp4",
        },
      ],
    },
  ],
};
