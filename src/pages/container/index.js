import './style.css'

const Container = ({children}) => {
    return (
        <div>
            <header> 
                <p>
                    My Personal Trainer 
                </p>
                
            </header>
            {children}
            
             
        </div>
    )
}

export default Container

