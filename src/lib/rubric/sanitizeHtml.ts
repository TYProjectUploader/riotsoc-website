/** Strip Rubric inline colour styling so Tailwind classes control appearance. */
export function stripRubricInlineStyles(html: string): string {
  return (
    html
      // style="..." / style='...'
      .replace(/\s*style\s*=\s*"[^"]*"/gi, "")
      .replace(/\s*style\s*=\s*'[^']*'/gi, "")
      // legacy colour attributes
      .replace(/\s*color\s*=\s*"[^"]*"/gi, "")
      .replace(/\s*color\s*=\s*'[^']*'/gi, "")
      .replace(/\s*bgcolor\s*=\s*"[^"]*"/gi, "")
      .replace(/\s*bgcolor\s*=\s*'[^']*'/gi, "")
      .replace(/\s*background(?:-color)?\s*=\s*"[^"]*"/gi, "")
      .replace(/\s*background(?:-color)?\s*=\s*'[^']*'/gi, "")
  );
}
