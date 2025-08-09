function Tag({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-sm leading-5">
      {children}
    </span>
    );
}

export default Tag;