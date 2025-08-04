import css from './Alert.module.css';
function Alert({ type, message}) {

    const AlertStyle = {
        backgroundColor: type === 'error' ? '#f8d7da' : '#d4edda',
        color: type === 'error' ? '#721c24' : '#155724',
        position: 'fixed',
        top: '10px',
        right: '10px',
        padding: '10px 10px 0px 10px',
        border: type === 'error' ? '2px solid #f5c6cb' : '2px solid #c3e6cb',
        borderRadius: '3px'
    }

    const borderColor = type === 'error' ? '#721c24' : '#155724';

    return (
        <>
            <div style={AlertStyle} className="small">
                {message}
                <div style={{ backgroundColor: borderColor }} className={`${css['alert-border']}`}>
                    
                </div>
            </div>
        </>
    )
}



export default Alert;