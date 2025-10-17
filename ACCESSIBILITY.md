# Accessibility Checklist

- **Heading hierarchy**: Single H1 present.
- **Labels**: Input has a programmatic label via visually-hidden label element.
- **Keyboard**: All controls reachable by Tab and have visible focus styles.
- **Live updates**: Paragraph uses `aria-live="polite"` to announce dynamic content.
- **Contrast**: Use color variables and test contrast to ensure AA compliance.
- **Forms**: If wrapped in a form element, prevent default submission when needed.
- **Testing**: Test keyboard-only navigation, VoiceOver or NVDA, and a contrast tool.
