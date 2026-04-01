export const Navbar = ()=>{
    return `<nav style="display: flex;justify-content: space-evenly;align-items: center;">
        <div>
            <img src="../../utils/cocacola.svg" width="50" style="border-radius: 50%;" alt="logo">
        </div>
        <div style="display: flex; gap: 1rem">
            <span>HOME</span>
        <span>ABOUT</span>
        <span>CONTACT</span>
    </div>
    <div >
        <button>Login</button>
    </div>
</nav>`
}