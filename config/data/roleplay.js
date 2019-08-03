module.exports = [
  {
    Scene: "Booking appointment",
    description: "Roleplay for booking an appointment with a doctor",
    characters: ["Receptionist", "Patient"],
    script: {
      0: [
        { text: "Good morning, do you have an appointment? ", timer: 3000 },
        {
          text:
            "Excellent, there you are there. The doctor will be about 10 minutes. Have you been to this practice before?",
          timer: 3000
        },
        {
          text:
            "Great, can you fill in this short form and can I have your Medicare card?",
          timer: 3000
        }
      ],
      1: [
        { text: "Yes, my name is %s", timer: 2000 },
        { text: "No, this is my first time", timer: 2000 },
        { text: "Okay", timer: 1000 }
      ]
    }
  }
];
