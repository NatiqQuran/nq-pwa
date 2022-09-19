const styles = (...styles: React.CSSProperties[]): React.CSSProperties =>
    Object.assign({}, ...styles);

export default styles;