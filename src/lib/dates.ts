

type Options = {
  locale?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
}

export function formatDate(d: Date, opts?: Options) {
  const locale = opts?.locale ?? "en-us";
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...opts?.options,
  };
  const fullDate = d.toLocaleString(locale, options);

  return fullDate;
}