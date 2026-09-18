// ============================================================
// CONFIGURATION — Edit everything here
// ============================================================
const CONFIG = {
  names: {
    v: "V",
    kittu: "Kittu",
  },
  birthday: "September 22, 2026",

  // Replace with real photo paths under assets/
  photos: [
    { src: "im1.jpg", date: "Jan 2024", caption: "Why were we like this 😭", funny: true },
    { src: "IMG-20250925-WA0008.jpg", date: "Mar 2024", caption: "Okay this one is actually cute.", funny: false },
    { src: "IMG-20260212-WA0117.jpg", date: "Jun 2024", caption: "Never letting you forget this.", funny: true },
    { src: "Snapchat-1784989344.jpg", date: "Aug 2024", caption: "One of my favorite memories.", funny: false },
    { src: "IMG_1212.JPG", date: "Dec 2024", caption: "I have no explanation for this.", funny: true },
    { src: "Snapchat-1819497808.jpg", date: "Feb 2026", caption: "We were so unserious 😂", funny: true },
  ],

  timeline: [
    { chapter: "01", title: "Somehow we met", date: "Early 2023", story: "Neither of us planned this. And yet, here we are." },
    { chapter: "02", title: "We became friends", date: "Mid 2023", story: "Slowly, then all at once. The usual." },
    { chapter: "03", title: "We became WAY too comfortable", date: "Late 2023", story: "The point of no return. You've seen too much." },
    { chapter: "04", title: "You became my favorite person", date: "2024", story: "I didn't even notice when it happened. It just did." },
    { chapter: "05", title: "And now look at us...", date: "2026", story: "Still here. Still chaotic. Still us. 🫶" },
  ],

  reasons: [
    { num: "01", text: "You make me laugh like no one else does." },
    { num: "02", text: "I can be completely myself around you." },
    { num: "03", text: "You somehow make boring days better." },
    { num: "04", text: "You're my favorite person to annoy." },
    { num: "05", text: "You know the weirdest version of me and stayed anyway." },
    { num: "06", text: "You make ordinary memories feel special." },
    { num: "07", text: "You are both my peace and my chaos." },
    { num: "08", text: "You understand things I don't always know how to explain." },
    { num: "09", text: "You're someone I genuinely care about." },
    { num: "10", text: "You're V. And honestly, that's enough. ❤️" },
  ],

  // quiz: [
  //   {
  //     q: "What's the thing we always say we'll stop doing but never do?",
  //     options: ["Overthinking", "Staying up too late talking", "Making plans we cancel", "All of the above 😭"],
  //     correct: 3,
  //     reaction: "Correct! We are so predictable 😂",
  //     wrong: "Really?? You were there! 😭",
  //   },
  //   {
  //     q: "What's Kittu's go-to move when things get awkward?",
  //     options: ["Make a joke", "Pretend nothing happened", "Send a meme", "Disappear for 5 minutes"],
  //     correct: 0,
  //     reaction: "You know me too well 😅",
  //     wrong: "Hmm... are you sure about that? 👀",
  //   },
  //   {
  //     q: "What would we most likely be doing on a random Tuesday night?",
  //     options: ["Being productive", "Talking about random things until 2am", "Watching something", "Arguing about something silly"],
  //     correct: 1,
  //     reaction: "Obviously. Every single time. 😂",
  //     wrong: "Bold choice. Wrong, but bold. 😂",
  //   },
  //   {
  //     q: "What's the one thing V always does that Kittu secretly loves?",
  //     options: ["Random check-ins", "Sending voice notes", "The laugh", "All of it honestly"],
  //     correct: 3,
  //     reaction: "Yeah... all of it. Don't tell anyone. 🫶",
  //     wrong: "Close... but not quite. 😌",
  //   },
  //   {
  //     q: "How would you describe us in one word?",
  //     options: ["Chaotic", "Wholesome", "Unhinged", "Chaotically wholesome"],
  //     correct: 3,
  //     reaction: "PERFECT answer. That's exactly it. ❤️",
  //     wrong: "Technically not wrong... but not the best answer 😂",
  //   },
  // ],

  shayari: [
    {
      text: "जब से तू मिला है मुझे, खुद को भूल गई हूं मैं,\nतेरी मोहब्बत में इस कदर खोई हूं,\nकि वापस आने का मन ही नहीं करता।",
      label: "💫"
    },
    {
      text: "तेरी मोहब्बत ने बदल दिया मुझे,\nपहले से बेहतर बना दिया मुझे,\nतेरे साथ हर मुश्किल आसान लगे,\nतूने ज़िंदगी को मायने दे दिए मुझे।",
      label: "❤️"
    },
    {
      text: "तू मेरा दोस्त है, मेरा यार है,\nतेरे साथ हर पल खास लगता है,\nतू गुस्सा हो तो मनाने का मन करता है,\nतेरे बिना जीना बेकार लग जाता है।",
      label: "🌸"
    },
    {
      text: "तेरी आंखों में एक दुनिया बसती है,\nजिसमें खो जाना चाहती हूं मैं,\nतेरे लफ़्ज़ों में एक कशिश है ऐसी,\nजो बार बार सुनना चाहती हूं मैं।",
      label: "✨"
    },
  ],

  gifts: [
    { label: "Something sweet 💌", emoji: "💌", reveal: "text", content: "You deserve every good thing. Every single one. I hope this year gives you more than you expect and less than you worry about. You're doing better than you think. — Kittu 🫶" },
    { label: "Something embarrassing 😂", emoji: "😂", reveal: "text", content: "Remember that time you said something so unhinged I had to screenshot it? Yeah. I still have it. I will never let you forget. This is your reminder. 😂 (You know exactly what I'm talking about.)" },
    { label: "Something you'll probably make fun of me for 🫣", emoji: "🫣", reveal: "text", content: "Okay fine. I spent way too long on this website. Like... embarrassingly long. But you're worth it. Don't make it weird. 🫣" },
    { label: "Something to listen to 🎧", emoji: "🎧", reveal: "music", content: "" },
    { label: "DO NOT OPEN YET 👀", emoji: "🎁", reveal: "final", content: "" },
  ],

  music: {
    title: "Sun Saiyaan",
    artist: "masroor fateh Ali khan & Aima Baig",
    src: "",
    cover: "",
  },

  letter: `Dear V,

I've been staring at this for a while now, trying to find the right words. You know me — I'll crack a joke before I'll say something real. But today, just for a moment, I want to be real with you.

You came into my life quietly. No big moment, no dramatic entry. Just slowly, without me even realizing it, you became the person I reach for first.

When something funny happens — it's you I want to tell.
When something hurts — it's your name that comes to mind.
When I'm just existing, doing nothing at all — somehow you make even that feel like enough.

I don't think you fully know what you mean to me. The way you listen without making me feel like a burden. The way you never make me feel like too much. The way you just get it, without me having to explain everything from the beginning.

You are my calm in the middle of chaos. My reason to smile on days that didn't deserve one. My favorite part of ordinary days.

I hope this birthday feels like a warm hug from someone who genuinely means it. I hope this year gives you everything you've quietly been hoping for — the things you haven't even said out loud yet.

I hope you know, on your worst days, that someone out there thinks the absolute world of you.

Because I do, V.
I really, truly do.

Happy Birthday.

With all my heart,
Kittu ❤️`,

  wishes: [
    "More reasons to smile.",
    "More adventures.",
    "More dreams coming true.",
    "More moments worth remembering.",
    "More happiness.",
    "And obviously... more memories with me. 😌❤️",
  ],

  finalMessage: {
    line1: "Happy Birthday, V ❤️",
    line2: "Thank you for being my best friend,\nmy partner,\nmy favorite person to annoy,\nand someone who makes my life a little more special.",
    line3: "Here's to another year of YOU.",
    sign: "With lots of love,\nKittu 🫶",
  },
};
