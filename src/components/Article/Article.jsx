const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="alura-card">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
        {tags.map((tag) => (
          <span
            className="alura-tag"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <div>
        {text.map((texto, index) => (
          <p key={index} className="text-alura-200 dark:text-gray-400 line-clamp-4 sm:line-clamp-none">
            {texto}
          </p>
        ))}
      </div>
      {image && <img className="w-300 p-4" src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};

export default Article;
