const joinStyles = (...styles: React.CSSProperties[]): React.CSSProperties =>
    Object.assign({}, ...styles);

export default joinStyles;