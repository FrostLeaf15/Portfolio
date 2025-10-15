function Button({label, className, href}) {
    return (
        <a href={href} className={className}>
            {label}
        </a>
    );
}

export default Button;