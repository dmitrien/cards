import './card.css'
export const Card = ({ children, title, text}) => {
    return (
        <div className="card">
            {children}
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ text }</p>
                <a href="/#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};
