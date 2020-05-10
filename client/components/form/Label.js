export default props => (
    <>
        <div className="label-group">
            <label className="label" {...props} />
            {props.error && (
            <>
                <span className="error">{props.error}</span>
            </>
            )}
        </div>

        <style jsx>{`

        .label-group{
            display:flex;
        }
        .error{
            color:red;
            font-size:.8rem;
            margin-left:auto;
        }

        `}</style>
    </>
);