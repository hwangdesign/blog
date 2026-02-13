export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="border border-black/20 bg-slate-100 p-8 sm:p-12 md:p-16"
    >
      <h2 className="text-xl font-bold text-black sm:text-2xl">
        Subscribe for an instantly better inbox
      </h2>
      <p className="mt-4 text-sm text-black sm:mt-4 sm:text-base">
        Enter your email to get the latest posts and updates.
      </p>
      <form className="mt-8 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
        <input
          type="email"
          placeholder="Enter email"
          className="min-w-0 flex-1 border border-black/20 bg-white px-6 py-4 text-black placeholder:text-black/60 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 sm:min-w-[200px]"
        />
        <label className="flex items-center gap-4 text-sm text-black">
          <input type="checkbox" className="border-black/20" />
          I agree to opt-in to the mailing list.
        </label>
        <button
          type="submit"
          className="w-full bg-brand-green px-8 py-4 font-medium text-white sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
