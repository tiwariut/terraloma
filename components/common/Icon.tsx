type IconProps = {
  name: string;
  blockClass: string;
  classModifier?: string;
};

const Icon = ({ name, blockClass, classModifier }: IconProps) => {
  return (
    <div
      className={`u-display-flex ${blockClass}__icon-container ${
        classModifier ? `${blockClass}__icon-container--${classModifier}` : ''
      }`}
    >
      <svg
        className={`icon ${blockClass}__icon ${
          classModifier ? `${blockClass}__icon--${classModifier}` : ''
        }`}
      >
        <use xlinkHref={`/icons/sprite.svg#${name}`}></use>
      </svg>
    </div>
  );
};

Icon.defaultProps = {
  name: '',
  blockClass: ''
};

export default Icon;
