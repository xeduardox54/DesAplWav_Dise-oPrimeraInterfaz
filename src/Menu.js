import logo from './logo.png';
import './Menu.css';
import Table from './App/Components/Table';

function Menu() {
    return (
        <div className="Menu">
            <div className="barra">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="opciones">
                    <table>
                        <tr><td>Analytics</td></tr>
                        <tr><td>Queries</td></tr>
                        <tr><td>Clients</td></tr>
                        <tr><td>Inbox</td></tr>
                        <tr><td>Documents</td></tr>
                        <tr><td>Settings</td></tr>
                    </table>
                    <p>Logout</p>
                </div>
            </div>
            <div className="contenido">
                <div className="barra_superior">
                    <input type="text" placeholder="Search.." />
                    <button>Dahsboard</button>
                    <button>Contact</button>
                    <button>Suport</button>
                    <div className="profile">
                        Hello Eduardo
                        <span class="helper"></span>
                        <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" className="user"/>
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/message-circle-1471157-1245257.png" className="user"/>
                        <img src="https://cdn3.iconfinder.com/data/icons/ui-icon-part-2/128/notification-512.png" className="user"/>
                    </div>
                </div>
                <div className="estadisticas">
                    <div className="dinero">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEA0SEg8NFRIPDQ4PDxAPDQ8NDxAPFRUXFhUSFRUYHSggGBolGxUVITEhJSktLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQYCBQMEB//EAEUQAAEDAgIDCA0LBAMAAAAAAAABAgMEBQYREiExExVBVXWVs9MHFjI0NVFSYXGhtNHSFBciM1R0dpGSlMMjgcHwJERT/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP7icqoVxUQCIh0QoAAAACAMyggFAAAAKAOFUqqVEAIhSFAAAAAQBmUEAoAAABVAAml6QARCgACFAAEUiLmBSgAAABCgigUgQoERCgACFAAEcE1gCgAAABCgigUm0FAmiCgACFAAEAAoAmZQQCgHKqB0pA1CgQZlAAEKAIpQBEBQAAIBQDlVA6BEKBCgAAQAUgKBCkKAAAABTnPMCKp0iBEAFAAAAACZgoAEKAAAAKRVJtAmeZ0iDIAUAAAAABMwBQAAIUAARQgAoAAx+M8eR0EsFNFCtTVzywxtgbKkTY0kcjGOlkVFRmaqiJnt8yH3xTiCZsrKGhYj66Zmmr3ou4UcCrl8olXh19y3hX8lz+IMNxUFLbmtc6Saa/2mSqqpNc1TNuyZvevi1rk3Yn5qoetv/eOIGc803wDtgvHEDOeab4DZkcBju2C8cQM55pvgPkmL6+OooYqq0NgZWVKU7ZUuUVRovVrndw1ma6mr4jbIZDHvfOHuWWdBKBsDHYyx7HQzU9LDCtTVzzQxpAyVImRbq5GsWWRUVGK5VTJF9OpNv2xTiCbdm0FA1HVsjEfJK9M4KGBdW7SeU5deizh4dWpfAxDhyK309nYxXPkkxJapKmokXSmqZllXOR7vzyTgA9jtgvHEDOeab4Cb/wB44gZzzTfAbMAYztgvHEDOeab4DmHF1cypoYaq0tgZWTuhZKlyiqNFyMc/uGs16m+NDaKZDGnfuHeU5PZpQNeUAAAAIUEcBSBCgAAABCgAcqpWoAKABCggGRtnh658l2/pJi9kn6q2cu2rpkJbPD1z5Lt/STDsk/VWzl21dMgGvAAAx2PO+cPcss6CU2Jj8e984e5ZZ0EoCy+Hb19xtn8xOyV3Nm/EVp6VRZfDt6+42z+YdkrubN+IbT0oGxIRVK1AKhkMa9+4d5Tk9mlNeZDGvfuHeU5PZpQNcUEAoBABQAIUAACACnCqM8zpEANQpCgAAAAIBkbZ4eufJdv6SY8vE9ZJdqiOit+hlQVkNTV18iK+nhqIV0mU7ETLdX55aSIuTU1bdnkY8juDLpUfJqev+T1dHSQ1NVRQJLUMjY6VXsh0nNaj10kTSVfooue092y4jjo4IqensF/ZFE3JrUooP7uVd2zVy7VVdoH7t7b3xlbebZOtG9t74ytvNsnWjt5dxJiH9lB1w7eXcSYh/ZQdcA3uvfGVt5tk60zFpW4XO40+lU0s9Ha6rdn1UNK6njkqmtcxYYlV67pkjtbk1J59WftVk9ZeHJTtpq6hoskWslqWshq6hF/68KNc7Raqd0/PYuXp2dvoYqaKOGGNjIomoyNjEya1qf7t4QMxZfDt6+42z+Y83ElTLdqiKlodBG2+shqp66RrpKdlTCucdOxqKm6Oz7rJckT0nkYzirmXOt3GnuC01bT0UdRPRU+6z7nGj9KOFVc1rXLpoiuVdSbPP71pxMykhjggsF+jijTJrG0MGXjVV/ra1VdaqutVUD9m9t74ytvNsnWje298ZW3m2TrSdvL+JMQ/soOuL28u4kxD+yg64AtuvfGVt5tk60zVhdX3O5U731NLNRWyofJ8qhpXU7JqnQfGsUWbl00TS1u2enVn61Y+svL0p/k9bQ0CIi1j6hrYayrzz/48aNc7QjVO6dnmueXjz29BRxwRRxRRtZHE1GRsYmTWtTgQD7gEAFBAKAAABFUCg50gB0AABMigCFIpG+cClAAH81xZjqofNHBbVYkba+lo6q4PjSaFk0z0YkMTVVEkcmebsl1ak4cz1sTT1FdWOtcEjoIm08c9fUtVN2dDIrmtgg8lXaK5uXYnr+WNLbFS0lnggjbHFFe7S1jGpqRN3TX51XaqrrVVA/VvHeOPKfmWPrSbyXjjyn5lj602BFAyO8l448p+ZY+tPPrZbnRVNqSa5QzxVde2mkjbbY6ZUarHvz0tN3kZf3N8hkMe984e5ZZ0EoGwP5pirHNRJNBDbVYkK3Kloai4vjSaJJ5naO5QtVUSRW7XLn4k4cz1cRTT3CsktkUjoIIoIprhUNdlPJFLpaNPD5OkjXaTl4PX88cUEVNT2KGGNscUV/tLWMYmSNTdV/NeHPhA/XvHeOPKfmWPrRvHeOPKfmWPrTXgDH7yXjjyn5lj60/FUS3OjrLUye5Q1EVZVugextujplREie/PSR7uFqG8cZDGnfmHeU5PZ5QNeUAAAAIUEUCkyCFAAAACFAAhQAAAhQQDI2zw/c+S7f0kxeyT9VbOXbV0yEtvh658l2/pJh2SF/pWzl209MgGuzKREKAMdjzvnD3LLOglNiY/HvfOHuWWdBKAsvh29fcbZ/MTsldzZvxFaelUWXw7evuNs/mHZK7mzfiG09KBsSAoAyGNe/cO8pyezSmvMhjXv3DvKcns0oGuKCAUEzOdoHRSIhQICgACZecAUgKBEKQqAAAABFJtAx1LMyO93V73Na1lpoXve9yNY1iPmVVVV2ZZHnOgkxA9jlWaC1QSpJA5qrDVV07F+jO1dscTV1t4V2+j82OcC11ZcFqIX0TqZ0NM2alqZahjKh0Kvc1JEjbrYiuRcs9aprTUeyxL+1ERseHURqIiIj69ERE1IiJlqQDr5uoPtt651qPePm6g+23rnWo95NPEHkYe/XX+4uliDyMPfrr/AHAfCvwPRwRSSy3G8Mjiar5Hvu1QjWtThXWeFgnCbqqriuDpLi2igdulvgrKuWead+SolU9HLlG1UVdFqa1255d1oIsNVldNE+7PonQU6o+Gio92Wnlm4JZ1kTN2jwN2etF2wGKt9SyK9X2SR7WMjt9te973I1rWpuyq5VXYh+BKeTEL45XbvBa4JUlpdFVgqq2duejUo7uoo261bwrt9H5MaYDrqu4vqYX0LqaRlLutLVS1DGTvhR2gkqRt+k1HOzyzyXhQ9tvbAiIiR4dREREREfXoiInAmoD6/N9B9tvXO1V7x830H229c7VXvPnpYg8jD366/wBw08QeRh79df7gPnccG0lPFJNNcbwyKJque993qka1Pz9XCeLgfCr6iqjuMklxbSwqrrdTVlXNUTSKrVb8qkR6roIrXampr8a+P3IMM1lbPHLdn0boqZUdT0VHuq0z5v8A2m3RM3qmxG7PXntQBFUKpEQCJrOwQCgAAAAAJ/u0AUAAAABCkUIAKAAAAAhSKBSBPOUAAABMigCZlIoQAUAAAAICkd5gKpAnrKAAAAEGYFJmRVKiAVAABCggFAIAKAAIUAAQZgUhztOkQCgACFBAKAQAUAAQoAAmQApxtGWZ2BEKQZgUAAACACoCAUAAACKBVU4TWVEOgCAhQAAAAEAFBAKAAABMwKCa/MAKAAAAAhSKRqZAUoAAAACFIBSBCgAAAAAEKRQgAoAAAAQFOFXMCq4qNCIUAAAAAAAACJ/kKABQAAAAAjQADigAAAAAAEaF/wAgAUAAAABHbCNAAqlAAAAD/9k="/>
                        $9,443
                        <p>Available Balance</p>
                    </div>
                    <div className="dinero">
                        <img src="https://www.creativefabrica.com/wp-content/uploads/2019/03/Money-icon-by-ahlangraphic-90.jpg"/>
                        $5,918
                        <p>Total Income</p>
                    </div>
                    <div className="dinero">
                        <img src="data:image/png;base64,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"/>
                        $3,525
                        <p>Recuest Money</p>
                    </div>
                </div>
                <div className="tablas">
                    <div className="balance">
                        Balance Content
                        <button>Week</button>
                        <button>Month</button>
                        <button>Year</button>
                    </div>
                    <div className="ingresos">
                        <div className="sub-table">
                            Income
                            <button>...</button>
                        </div>
                        <div className="sub-table">
                            Expense
                            <button>...</button>
                        </div>
                    </div>
                </div>  
                <div className="limit">
                    <div className="limit-table">
                        Credit Limit
                        <button>...</button><br/>
                        1500
                        <div className="limit-bar"></div>
                    </div>
                    <div className="limit-table">
                        Online Limit
                        <button>...</button><br/>
                        1280
                        <div className="limit-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default Menu;  