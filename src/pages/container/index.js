import './style.css'

const Container = ({children}) => {
    return (
        <>
        <header> 
            <p>
                My Personal Trainer 
            </p>
                
        </header>
        <div className = "container">
            {children}
            
        </div>
        </>
    )
}

export default Container

