import './style.css'

const Container = ({children, className}) => {
    return (
        <>
        <header> 
            <p>
                My Personal Trainer 
            </p>
                
        </header>
        <div className = {`container ${className}`}>
            {children}
            
        </div>
        </>
    )
}

export default Container

