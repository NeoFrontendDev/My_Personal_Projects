//Speech Synthesis
export function speak(text) {
    if (!("speechSynthesis" in window)) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "af-ZA";
    window.speechSynthesis.canvel();
    window.speechSynthesis.speak(utter);
}