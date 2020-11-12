// ####  #####   #     ###  #####
// #   # #      # #   #   #   #
// #   # #     #   # #        #
// ####  ####  ##### #        #
// #  #  #     #   #  #   #   #
// #   # ##### #   #   ###    #		
//                           
//                          
// TWORZENIE NOWEGO PROJEKTU
// Trzeba byc w folderze z projektami i wywołać polecenie: (nazwa folderu z malej litery)


//Instaluje CRA globalnie poleceniem:
λ npm install create-react-app --global

//Tworze nowy projekt poleceniem:
λ npx create-react-app nazwa-katalogu
//Powstanie nowy katalog.

//Po pomyslnej instalacji można ten projekt uruchomić poleceniem:
λ npm start

//Wyświetli się adres strony: http://localhost:3000/ i można otworzyć ją w przegądarce

//Tworzenie wersji produkcyjnej:
λ npm run build




//Miałem sytuację, ze po wywołaniu npx create-react-app nazwa-katalogu, projekt zawierał tylko: node_modules, package.json, package-lock.json
// Oraz komunikat o przestarzałej wersji polecenia.
//Pomogło wywołanie polecenia: npm install -g create-react-app


//Pierwsza stronka zrobiona na React:
//plik index.js 

const header = <h1 className="title"> Witaj na stronie</h1>
const main = (
    <div>
        <h1>Pierwszy artykół</h1>
        <p>Hejka</p>
    </div>
 )
 
const footer = (
   <footer>
     <p>Stopka</p>
   </footer>
)
 
const app = [header, main, footer]
 
ReactDOM.render(app, document.getElementById('root'))

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

//kliknięcie na napis w h1:
<button onClick={function () { alert("wykryto klik") }}>Kliknij</button>
//lub to samo z arrowFunction
<button onClick={() => alert("wykryto klik")}>Kliknij</button>
//to samo, ale przekazujemy wcześneij zdefiniowaną funkcję:
const handleClick = () => alert("klik")
<button onClick={handleClick}>Pierwszy artykuł</button>
//button przekazujący argumenty do handleClick(argumenty):
	<button
		onClick={this.handleClick.bind(this, argumenty)}
		onClick={() => this.handleClick(argumenty)}
		disabled={jakasFlaga ? false : true  } //wyszarzenie przycisku
	> OK </button>


  __________________________            ___
  |                        | input      |v| checkbox
  --------------------------            ---
	state = {
		inputValue: 
	}

	handleInputChange =(e) => {
			this.setState({ 
				 	inputValue: e.target.value ,
			});
	}

	render() {
		return (
			<label>
				Wpisz cos
				<input type="text" // "checkbox", "emali", "password"
					name="name"
					placehlder="Sugerowany tekst"
					value={this.state.inputValue} 
					onChange = {this.handleInputChange}
				/>
			</label>
		)
	}


  __________________________
  |                        | 
  | textarea               | 
  |                        | 
  --------------------------
	<label>
		napisz coś o mieście
		<textarea value={this.state.text}
				onChange={this.handleTextChange}
		>
		</textarea>
	<label>
	


  ___
  |v| checkbox
  ---
	state = {
		isChecked: false,
	}

	handleCheckedChange =(e) => {
			this.setState({ 
				isChecked: e.target.checked ,
			});
	}

	render() {
		return (
			<label>
				Wpisz cos
				<input type="checkbox" 
					name="name"
					checked={this.state.isChecked} 
					onChange = {this.handleCheckedChange}

					//value={this.state.inputValue} 
				/>
			</label>
		)
	}


  _____________
  |          v| select  (pole kombi)
  -------------
	state = {
		number: "0",
	}

	handleSelectChange =(e) => {
		this.setState({ 
			number: e.target.value,
		});
	}

	<label>
		Ile razy byłes w tym mieście
		<select value={this.state.number}
			onChange={this.handleSelectChange}
		>
			<option value="0">0</opton>
			<option value="1">1</opton>
			<option value="5">5</opton>
			<option value="more">Więcej</opton>
		</select>
	<label>






.trim()  // usówa białe znaki na końcu. tak jak strip() w Pythonie
const value = input.value.trim();

const value = parseInt(props.number); //typowanie na Int


//DESTRUKTURYZACJA

	render() {
        const {isConfirmed, isFormSubmitted} = this.state  //DESTRUKTURYZACJA: wyodrębniam sobie element 
            //ze środka "state". Teraz zamist pisać {this.state.isConfirmed}
            // zapisuje tylko: {isConfirmed} 
            // można wyodrębnić kilka elementów
	}



	const player = {
		age: 24,
		name: "John"
	};
	//destrukturyzacja:
	const {age, name} = player; //można też użyć let zamist const  
	//wyodrębnainie na piechotę:
	const age = player.age;


	const players = ["Jacek", "Tomasz"]
	//destrukturyzacja:
	const [user1, user2] = players;  //musimy napisać nazy 



//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------


//komponent daty
<time>{(new Date()).toString()}</time>

KOMPONENTY
* stateless functional component, - SFC, komponent bezstanowy
* stateful functional component - komponent stanowy


W strefie kursów jest:
 var UserTable = React.createClass({
 	render: function() {
 		return (
 		<h2>To jest komponent userTable</h2>
 		);
 	}
 });
ReactDOM.render( <UserTable /> , document.getElementById('content')); 
// A powinno być:
const UserTable = () => (
	<div>
		<h2>To jest komponent userTable</h2>
	</div>
 )
ReactDOM.render( <UserTable /> , document.getElementById('content')); 

//Wewnątrz tego komponentu mozna włożyć kolejne komponenty:
const UserTable = () => (
	<div>
		<h2>To jest komponent userTable</h2>
		<KolejnyKomponent />
	</div>
 )

const UserTable = () => (
	<div>
		<h2>To jest kolejny komponent</h2>
		<TutajJeszczeKoejnyKomponent />
	</div>
 )

//Nie wiem dla czego, ale Szczecinski zaproponował taką składnię zamiast wstawaiana komponentu:
ReactDOM.render( React.createElement(Tweet, null), document.getElementById('Komponent_SFC'));
// wynik ten sam co ten:
ReactDOM.render( <Tweet /> , document.getElementById('Komponent_SFC'));





//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//komponenty

//kompinent bezstanowy (funkcyjny)
	const App = () => {
		return (
			<div>
				<h1>Piewszy kompinent bezstanowy</h1>
			</div>
		)
	}
	ReactDOM.render(<App/>, document.getElementById('root'));

//kompinent stanowy (klasowy)
	class App2 extends React.Component {
		state = {
			number: 0
		}

		render() {
			return (
				<div>
					<h1>Piewszy kompinent stanowy {this.state.number}</h1>
				</div>
			)
		}
	}
	ReactDOM.render(<App2 />, document.getElementById('root'))

//------------------------------------------------------------
//powyższe można połączyć ze sobą:

	const ZebraneApp = () => {
		return (
			<> // to jest to samo co <React.Fragment>
				<App1 />
				<App2 />
			</>
		)
	}

	ReactDOM.render(<ZebraneApp />, document.getElementById('root'))

//------------------------------------------------------------
//kompinent stanowy (klasowy) rozbudowany:
	class DodajCyfre extends React.Component {
		constructor(props) {
			super(props); //wymagane przekazanie propsów do rodzica
			this.state = {
				text: "",
				messageIsActive: false,
			}
			this.handleClick = this.handleClick.bind(this)
		}

		handleClick(e) { // może być przypisany this w konstruktorze, albo funkcja straałkowa, 
		                 // albo w <button> dopisać .bind(this)
						 // e czyli event, dodawnay jest domyślnie na końcu. Nie trzeba go dodawać
			debugger 	 // zatrzyma program w tym miejscu
			const number = Math.floor(Math.random() * 10);
			this.setState({ //albo jawne wywołanie jako funkcję: 
 			                //this.setState( (prevState) => ({ text: prevState.text + number})
				text: this.state.text + number,
				messageIsActive: !this.state.messageIsActive
			})
		}

		render() {
			
			// Tworze jeden obiekt, który zawiera wspólne cechy. 
			// w if() dopisze ewentualne dodatkowe właściwości albo  je zmieniam
			// jest to robione w render, więc za każdym razem ten obiekt jest tworzony na nowo
			let btnStyle = {
				border: '2px solid black',
				padding: '10px 20px',
				fontFamily: 'arial',
				fontSize: 30,
				display: 'block',
				margin: '20px auto',
				backgroundColor: 'white',
			}
			if (this.state.messageIsActive) {
				btnStyle.backgroundColor = 'cadetblue';
				btnStyle.color = 'white';
			}
		
			return (
				<>
					<button onClick={this.handleClick} //lub: onClick={(e) => this.handleClick(argumenty, e)}
					                                   // e czyli event, dodawnay jest domyślnie na końcu. Nie trzeba go dodawać
						style={btnStyle}
					>   Dodaj Cyfre
					</button>
	                    //this.props.btnTitle jest przekazany z ReactDOM.render(<App btnTitle="Dodaj cyfrę"/>, ...)
					<section>
						<PanelResult text={this.state.text} >jednostek</PanelResult>
					</section>
				</>
			)
		}
	}
	
	const PanelResult = (props) => {    // poprzez props, otrzymałem przekazany argument
		return (
			<h1>{props.text}: {props.children}</h1> //to co jest między znacznikami, jest przekazane jako props.children
		)
	}
	
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
React router
//Filmik 102 (React od podstaw)
//Instalujemy go poleceniem:
	npm install react-router-dom
//Po zainstalowaniu, trzeba zaimportować kilka komponentów:
	import { BrowserRouter, Link } from 'react-router-dom';
//Następnie w komponent BrowserRouter "owijamy" jedno dziecko (najlepiej jeden <div>)
	<BrowserRouter> 
		<div>
			...
		</div
	</BrowserRouter> 
//Teraz zamist tradycyjnych linków: <a href="/start">Start</a>
//Wprowadzamy: <Link to="/start">Start</Link>
//Od tej pory, przejście na inny link, nie odświerza strony
//Mozna urzyać skróconej nazwy BrowserRouter, deklarując to w imporcie:
	import { BrowserRouter as Router, Link } from 'react-router-dom';
	<Router> 
		<div>
			...
		</div
	</Router> 
//------------------------------------------------------------
//Przykład prostego SPA (calutki plik App.js)
	import React from 'react';
	import './App.css';
	import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
	const Home = () => <h1>Strona startowa</h1>
	const News = () => <h1>Aktualności</h1>
	const Contact = () => <h1>Kontakt</h1>
	function App() {
	  return (
		<Router>
		  <div className="App">
			<header className="App-header">
			<nav>
			  <ul>
				<li><Link to="/">Start</Link> </li>
				<li><Link to="/news">Aktualnosci</Link> </li>
				<li><Link to="/contact">Kontakt</Link> </li>
			  </ul>
			</nav>
			</header>
			<section>
			  <Route path="/" exact component={Home}/>
			  <Route path="/news" component={News}/>
			  <Route path="/contact" component={Contact}/>
			</section>
		  </div>
		</Router>
	  );
	}
	export default App;


//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//Lista zakupów:
	class ShoppingList extends React.Component {
		state = {
			items1: 'ogórki',
			items2: 'jajka',
			items3: 'sok',
		}

		render() { 
			return (   
				<section>
					<h2>Lista zakupów: </h2>
					<ul>
						<li>{this.state.items1}</li>    {/*  pierwszy krok */}
						<ItemList name="element 1" />   {/*  drugi krok */}
						<ItemList name={this.state.items2} />   {/*  trzeci krok */}
						<ItemList name={this.state.items2} example={2 + 2} />
						<ItemListC name={this.state.items3} example={2 + 2} />
					</ul>
				</section>
			)
		}
	}

	const ItemList = (props) => {
		return (
			//<li>{this.state.items1}</li> to nie zadzaiała
			<li>{props.name} - {props.example}</li>
		)
	}

	class ItemListC extends React.Component {
		render() {
			return (
				//<li>{props.name} - {props.example}</li> //teraz to nie zadziała
				<li>{this.props.name} : {this.props.example}</li> //teraz to nie zadziała
			)
		}
	}

	ReactDOM.render(<ShoppingList />, document.getElementById('root2'))


//------------------------------------------------------------
//Przycisk - po kliknięciu dodawana jest litera do tekstu
class App2 extends React.Component {
    constructor(props) {  
        super(props);     
        this.state = {
                text: "",
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        const number = Math.floor(Math.random()*10);
        console.log(this.state.text);
        this.setState( (prevState) => ({ text: prevState.text + number }) )
    }
    
    render() { 
        return (
            <> 
                <button onClick={this.handleClick}>Dodaj losową cyfrę</button>    
                <section>
                <PanelResult text={this.state.text}/>
                </section>
            </>
        )
    }
}

const PanelResult = (props) => {    // poprzez props, otrzymałem przekazany argument
    return (
        <h1>{props.text}</h1>
    )
}

ReactDOM.render(<App2 />, document.getElementById('root2'))






//------------------------------------------------------------
//Licznik kliknięć

class Counter extends React.Component {

    state = {
        count: 0,
        result: this.props.result
    }

    handleMathClick = (type = 'reset', number = 1) => {
        if(type === "dodawanie") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        }

        if(type === "odejmowanie") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        }

        if(type === "reset") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: this.props.result
            }))
        }
    }

    render() {

        return(
            <>
                <MathButton 
                    name="-10" 
                    number="10" 
                    type="odejmowanie" 
                    click={this.handleMathClick} 
                />                
                <MathButton 
                    name="reset" 
                    type="reset" 
                    click={this.handleMathClick} 
                />                
                <MathButton 
                    name="+10" 
                    number="10" 
                    type="dodawanie" 
                    click={this.handleMathClick} 
                />                
                
                <ResultPanel count={this.state.count} result={this.state.result}/>
                
            </>
        )
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number)
    return ( 
        <button onClick={() => props.click(props.type, number)}>{props.name}</button>
    )
}

const ResultPanel = (props) => {
    return (
        <>
            <h1>Liczba kliknięć: {props.count} {props.count>10 ?  
                <span>. Przeciążenie procesora!</span> : null }</h1>
            <h1>Wynik: {props.result}</h1>
        </>
    )
}

const startValue = 10;
ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root4'))

//------------------------------------------------------------
// kupowanie biletu
//checkbox, przycisk i tekst, który wyświetla sie dopowiednio w zależniści,
// czy zaznaczony jest checkbox

const PositiveMessage = () => <p>Możesz obejżeć film. Zapraszamy</p> ;

const NegativeMessage = () => <p>Nie możesz obejżeć tego filmu jeśli masz mniej niż 16 lat!.</p> ;

class TicketShop extends React.Component {

    state ={
        isConfirmed: false,
        isFormSubmitted: false
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault() //to powoduje, że strona nie przeładowywuje się
        if(!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
    }

    displayMessage= () => {
        if(this.state.isFormSubmitted) {
            if(this.state.isConfirmed) return <PositiveMessage />
            else return <NegativeMessage />
        } else {return null}
    }

    render() {
        return (
            <>
                <p>------------------------------root5------------------------------</p>
                <h1>Kup bilet na horror roku!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" id="age" onChange={this.handleCheckboxChange} 
                        checked={this.state.isConfirmed}/>
                    <label htmlFor="age"> {this.state.isConfirmed? "Mam": "Nie mam"} co najmniej 16 lat. </label>
                    <br/>
                    <button type="submit">Kup bilet</button>
                </form>
                {this.displayMessage()}
            </>
        );
    }
}

ReactDOM.render(<TicketShop name="Witaj świecie" />, document.getElementById('root5'));


//------------------------------------------------------------
// kupowanie biletu - part II
//wyciagam displayMssage po za ciało klasy. Tylko żeby zobacyć jak to wygląda

const displayMessage= (isConfirmed, isFormSubmitted) => {
    if(isFormSubmitted) {
        if(isConfirmed) return <ValidationMessage txt="Możesz obejżeć film. Zapraszamy!"/>
        else return <ValidationMessage txt="Nie możesz obejżeć tego filmu jeśli masz mniej niż 16 lat!."/>
    } else {return null}
}

//te dwa komponenty, zastępuje jednym:
// const PositiveMessage = () => <p>Możesz obejżeć film. Zapraszamy</p> ;
// const NegativeMessage = () => <p>Nie możesz obejżeć tego filmu jeśli masz mniej niż 16 lat!.</p> ;
const ValidationMessage = (props) => <p>{props.txt}</p>

class TicketShop extends React.Component {

    state ={
        isConfirmed: false,
        isFormSubmitted: false
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault() //to powoduje, że strona nie przeładowywuje się
        if(!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
    }

    render() {

        const {isConfirmed, isFormSubmitted} = this.state  //DESTRUKTURYZACJA: wyodrębniam sobie element 
            //ze środka "state". Teraz zamist pisać {this.state.isConfirmed}
            // zapisuje tylko: {isConfirmed}
            // można wyodrębnić kilka elementów

        return (
            <>
                <p>------------------------------root5------------------------------</p>
                <h1>Kup bilet na horror roku!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" id="age" onChange={this.handleCheckboxChange} 
                        checked={isConfirmed}/>
                    <label htmlFor="age"> {isConfirmed ? "Mam": "Nie mam"} co najmniej 16 lat. </label>
                    <br/>
                    <button type="submit">Kup bilet</button>
                </form>
                {displayMessage(isConfirmed, isFormSubmitted)}
            </>
        );
    }
}

ReactDOM.render(<TicketShop name="Witaj świecie" />, document.getElementById('root5'));
//------------------------------------------------------------
// kupowanie biletu - part III
// z formulaża robie komponent
// dislayMessage przywrócony do ciała klasy

// nie wiem dla czego, w komponencie "OrderForm" działa "checked" oraz "isConfirmed"
// na filmiku koleś urzył "isConfirmed" a w moim odczuciu powinno być "checked" 

const ValidationMessage = (props) => <p>{props.txt}</p>

const OrderForm = (props) => {

    const {submit, change, checked, isConfirmed} = props
    return(
        <form onSubmit={submit}>
            <input type="checkbox" id="age" onChange={change} 
                checked={checked}/>
            <label htmlFor="age"> {checked ? "Mam": "Nie mam"} co najmniej 16 lat. </label>
            <br/>
            <button type="submit">Kup bilet</button>
        </form>
    )
}

class TicketShop extends React.Component {

    state ={
        isConfirmed: false,
        isFormSubmitted: false
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault() //to powoduje, że strona nie przeładowywuje się
        if(!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
    }

    displayMessage= () => {
        if(this.state.isFormSubmitted) {
            if(this.state.isConfirmed) return <ValidationMessage txt="Możesz obejżeć film. Zapraszamy!"/>
            else return <ValidationMessage txt="Nie możesz obejżeć tego filmu jeśli masz mniej niż 16 lat!."/>
        } else {return null}
    }

    render() {

        const {isConfirmed, isFormSubmitted} = this.state  //DESTRUKTURYZACJA: wyodrębniam sobie element 

        return (
            <>
                <p>------------------------------root5------------------------------</p>
                <h1>Kup bilet na horror roku!</h1>
                <OrderForm 
                    change={this.handleCheckboxChange} 
                    submit={this.handleFormSubmit} 
                    checked={isConfirmed}
                />
                {this.displayMessage()}
            </>
        );
    }
}

ReactDOM.render(<TicketShop name="Witaj świecie" />, document.getElementById('root5'));
//------------------------------------------------------------
// Sklep. Prosty przykład, dodawania produktów do koszyka

class App extends React.Component {

    state = {
        availbleProducts: 7,
        ShoppingCart: 1,
    }

    handleRemoveFromCart = () => {
        this.setState({
            ShoppingCart: this.state.ShoppingCart -1,
        })
    }

    handleAddFromCart = () => {
        this.setState({
            ShoppingCart: this.state.ShoppingCart +1,
        })
    }

    handleBuy = () => {
        this.setState({
            availbleProducts: this.state.availbleProducts - this.state.ShoppingCart,
            ShoppingCart: 0
        })     

    }

    render() {

        const {availbleProducts, ShoppingCart} = this.state;
        const style = ShoppingCart ? {} : { opacity: 0.3};

        return (
            <>
                <p>------------------------------root6------------------------------</p>
                <p>Stan magazynu: {availbleProducts} sztuk.</p>
                <button className="buttonSklep"
                    disabled={ShoppingCart ? false : true  } 
                    onClick={this.handleRemoveFromCart} >-</button>
                
                <span className="spanSklep"
                    style={ style }> {ShoppingCart} </span>
                
                <button className="buttonSklep"
                    disabled={ShoppingCart === availbleProducts ? true : false}
                    onClick={this.handleAddFromCart} >+</button>
                {ShoppingCart>0 && <button className="buttonSklepKup"
                    onClick={this.handleBuy} >Kup</button>}
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root6'));
//------------------------------------------------------------
//Proste wyświetlenie listy elementów z tablicy

class ListItems extends React.Component {

    state = {
        items: ["jabłko", "śliwka", "gruszka"]
    }

    render() {

        return (
            <>
                <ul>
                    {this.state.items.map((item) => <li key={item}>{`Owoc ${item}`}</li> )}
                </ul>
            </>
        )
    }
}

ReactDOM.render(<ListItems />, document.getElementById('root7'));
//------------------------------------------------------------
//Proste wyświetlenie listy elementów z tablicy
//Part II

const Item = (props) => <li>{`Owoc: ${props.content}`}</li>

class ListItems extends React.Component {

    state = {
        items: ["jabłko", "śliwka", "gruszka"]
    }

    render() {

        // tworze nową tablicę która zawiera <li> z elementami "sforatowanymi"
        const Items = this.state.items.map((item) => <Item key={item} content={item}/> )

        return (
            <>
                <ul>
                    {Items}
                </ul>
            </>
        )
    }
}

ReactDOM.render(<ListItems />, document.getElementById('root7'));
//------------------------------------------------------------
// na bazie tego co wcześniej, ale przekzauje tablicę obiektów
//Part III
const data = {
    users : [
        {
            id: 1,
            age: 29,
            name: "Arek"
        },
        {
            id: 2,
            age: 49,
            name: "Marta"
        },
        {
            id: 3,
            age: 19,
            name: "Stasia"
        }
    ]
}

// const Item = (props) => ( //bez destrukturyzacji
//     <div>
//         <h1>Użytkownik {props.content.name}</h1>
//         <h2>Ma {props.content.age} lat</h2>
//     </div>
// )

const Item = ({content}) => ( //zrobiona destrukturyzacja na props
    <div>
        <h1>Użytkownik {content.name}</h1>
        <h2>Ma {content.age} lat</h2>

    </div>
)

class ListItems extends React.Component {

    render() {

        const users = this.props.data.users
        // tworze nową tablicę która zawiera <li> z elementami "sforatowanymi"
        const Items = users.map((user) => <Item key={user.id} content={user}/> )

        return (
            <>
                <p>------------------------------root7------------------------------</p>
                <ul>
                    {Items}
                </ul>
            </>
        )
    }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root7'));

//------------------------------------------------------------
// Lista elementów, filtrowana zależnie od właściwości przycisku
//Part IV

const data = {
    users : [
        {
            id: 1,
            age: 29,
            name: "Arek",
            sex: "male",
        },
        {
            id: 2,
            age: 49,
            name: "Marta",
            sex: "female",
        },
        {
            id: 3,
            age: 19,
            name: "Stasia",
            sex: "female",
        },
    ]
}

const Item = ({user}) => ( //zrobiona destrukturyzacja na props
    <div className="userInfo">
        <h1>Użytkownik {user.name}</h1>
        <p>informacje o użytkowniku</p>
        <p>Wiek: <strong>{user.age}</strong> lat</p>
        <p>Płeć: {user.sex} </p>

    </div>
)

class ListItems extends React.Component {

    state = {
        select: "all",
    }

	handelUsersFilter(option) {
		this.setState({
			select: option
		})

	}

	userList = () => {
		let users = this.props.data.users;
		switch(this.state.select) {
			case "male":
				users = users.filter((user) => user.sex === "male");
				return users.map((user) => <Item key={user.id} user={user} />)
			case "female":
				users = users.filter((user) => user.sex === "female");
				return users.map((user) => <Item key={user.id} user={user} />)
			default:
				return users.map((user) => <Item key={user.id} user={user} />)
		}
	}

    render() {

        return (
            <>
                <p>------------------------------root7------------------------------</p>
                <div>
                    <button onClick={this.handelUsersFilter.bind(this, "all") }>Wszyscy</button>
                    <button onClick={this.handelUsersFilter.bind(this, "female") }>Kobiety</button>
                    <button onClick={this.handelUsersFilter.bind(this, "male") }>Mężczyźni</button>
                    {this.userList()}
                   
                </div>
            </>
        )
    }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root7'));
//------------------------------------------------------------






//-----------------------------------------------------------------------------
//React - formularz
// Wersja 1
class Form extends React.Component {

	state = {
		city: "Londyn",
		text: "Elo",
		isLoved: true,
		number: "0",
	}

	handleCityChange = (e) => { this.setState({ city: e.target.value }) }
	handleTextChange = (e) => { this.setState({ text: e.target.value }) }
	handleIsLovedChange = (e) => { this.setState({ isLoved: e.target.checked }) }
	handleVisitsNumberChange = (e) => { this.setState({ number: e.target.value })}

	render() {

		return (
			<div> 
				<label> Podaj miasto
					<input type="text" 
					value={this.state.city}
					onChange={this.handleCityChange}/>
				</label>
				<br/>
				<label> Napisz coś
					<textarea 
					value={this.state.text}
					onChange={this.handleTextChange}/>
				</label>
				<br/>
				<label> Czy lubisz to miasto
					<input type="checkbox" 
					checked={this.state.isLoved}
					onChange={this.handleIsLovedChange}/>
				</label>
				<br/>
				<label> Ile razy byliscie w tym miescie
					<select value={this.state.number}
					onChange={this.handleVisitsNumberChange}>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="more">Więcej</option>
					</select>
				</label>
			</div>
		)
	}
}

ReactDOM.render(<Form />, document.getElementById('root2'));
//-----------------------------------------------------------------------------
//React - formularz
// Wersja II 
// zoptymalizowane funcja OnChange do jednej wspólnej:

class Form extends React.Component {

	state = {
		city: "Londyn",
		text: "Elo",
		isLoved: true,
		number: "0",
	}

	handleChange = (e) => { 
		console.log(e.target.type)
		if(e.target.type === "checkbox")
			this.setState({ [e.target.name]: e.target.checked }) 
		else
			this.setState({ [e.target.name]: e.target.value }) 
	}

	render() {

		return (
			<div> 
				<label> Podaj miasto
					<input type="text" 
					name = "city"
					value={this.state.city}
					onChange={this.handleChange}/>
				</label>
				<br/>
				<label> Napisz coś
					<textarea 
					name = "text"
					value={this.state.text}
					onChange={this.handleChange}/>
				</label>
				<br/>
				<label> Czy lubisz to miasto
					<input type="checkbox" 
					name = "isLoved"
					checked={this.state.isLoved}
					onChange={this.handleChange}/>
				</label>
				<br/>
				<label> Ile razy byliscie w tym miescie
					<select name = "number"
					value={this.state.number}
					onChange={this.handleChange}>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="more">Więcej</option>
					</select>
				</label>
			</div>
		)
	}
}
ReactDOM.render(<Form />, document.getElementById('root2'));

//-----------------------------------------------------------------------------
//Kantor wymiany walut
//Etap I
const Dollars = (props) => (
	<div> 
		Wartosść w dolarach: 
		{ props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2) }
	</div>
)
//
const Euros = (props) => { //to samo co wyzej, tylko "inaczej"
	const value = (props.cash / props.ratio).toFixed(2);
	return (
		<div> Wartosść w euro: { value <= 0 ? "" : value } </div>
	)
}
//
class ExchangeCounter extends React.Component {
	
	state = {
		amount: "",
		ratioDollar: 3.6,
		ratioEuro: 4.2,
	}

	handleChange = (e) => {
		this.setState({
			amount: e.target.value
		})
	}

	render() {

		const {amount, ratioDollar, ratioEuro} = this.state;

		return(
			<>
				<div>---------------- Kantor -------------------- </div>
				<div className="app">
					<label>	
						<input type="number"  
						 value={this.amount}
						 onChange={this.handleChange} 
						/>
					</label>
					<Dollars cash={amount} ratio={ratioDollar} />
					<Euros cash={amount} ratio={ratioEuro} />
				</div>
			</>
		)
	}

}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root3"));

//-----------------------------------------------------------------------------
//Kantor wymiany walut
//Etap II 
// Tworze jeden wspólny obiekt do pokazywania i przeliczania walut
const Cash = (props) => (  
	<div> 
		{props.title}:
		{ props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2) }
	</div>
)
//
class ExchangeCounter extends React.Component {
	
	state = {
		amount: "",
		ratioDollar: 3.6,
		ratioEuro: 4.2,
	}

	handleChange = (e) => {
		this.setState({
			amount: e.target.value
		})
	}

	render() {

		const {amount, ratioDollar, ratioEuro} = this.state;

		return(
			<>
				<div>---------------- Kantor -------------------- </div>
				<div className="app">
					<label>	
						<input type="number"  
						 value={this.amount}
						 onChange={this.handleChange} 
						/>
					</label>
					<Cash cash={amount} ratio={ratioDollar} title="Wartość w dolarach" />
					<Cash cash={amount} ratio={ratioEuro} 	title="Wartość w euro" />
				</div>
			</>
		)
	}

}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root3"));

//-----------------------------------------------------------------------------
// Kantor wymiany walut
// Etap III 
// Tworze tablicę z walutami i ilość obiektów tworzy się sama, zaleznei od ilości obiektów w tablicy

const Cash = (props) => (  
	<div> 
		{props.title}: { props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2) }
	</div>
)

class ExchangeCounter extends React.Component {
	
	state = {
		amount: "",
	}

	currencies = [
		{
			id: 1,
			name: 'dollar',
			ratio: 3.6,
			title: "Wartość w dolarach"
		},
		{
			id: 2,
			name: 'euror',
			ratio: 4.1,
			title: "Wartość w euro"
		},
		{
			id: 3,
			name: 'pund',
			ratio: 4.55,
			title: "Wartość w funtach"
		},
	]

	handleChange = (e) => {
		this.setState({
			amount: e.target.value
		})
	}

	render() {

		const {amount} = this.state;

		const calculators = this.currencies.map(currency => ( 
			<Cash key={currency.id} cash={amount} ratio={currency.ratio} title={currency.title} />
		))

		return(
			<>
				<div>---------------- Kantor -------------------- </div>
				<div className="app">
					<label>	
						<input type="number"  
						 value={this.amount}
						 onChange={this.handleChange} 
						/>
					</label>
					{calculators}
				</div>
			</>
		)
	}

}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root3"));

//-----------------------------------------------------------------------------
// Kantor wymiany walut
// Etap IV
// Przeróbka, aby wyliczać cene produktów. 
// Tablica z walutami przeniesiona do "static defaultProps"

const Cash = (props) => (  
	<div> 
		{props.title}: { props.cash <= 0 ? "" : (props.cash / props.ratio * props.price).toFixed(2) }
	</div>
)

class ExchangeCounter extends React.Component {
	
	state = {
		amount: "",
		product: "electrcity",
	}

	static defaultProps = {
		currencies: [
			{
				id: 0,
				name: 'zloty',
				ratio: 1,
				title: "Wartość w PLN"
			},
			{
				id: 1,
				name: 'dollar',
				ratio: 3.6,
				title: "Wartość w dolarach"
			},
			{
				id: 2,
				name: 'euror',
				ratio: 4.1,
				title: "Wartość w euro"
			},
			{
				id: 3,
				name: 'pund',
				ratio: 4.55,
				title: "Wartość w funtach"
			},
		],

		prices: {
			electrcity: 0.51,
			gas: 4.76,
			oranges: 3.79,
		}
	}

	handleChange = (e) => {
		this.setState({
			amount: e.target.value
		})
	}

	handleSelect = (e) => {
		this.setState({
			product: e.target.value,
			amount: ""
		})
	}

	insertSuffix(select) {
		switch (select)
		{
			case "electrcity": 	return <em>kWh</em>
			case "gas": 		return <em>l</em>
			case "oranges": 	return <em>kg</em>
			default: 			return null
		}
	}

	selectPrice(select) {
		//const price = 
		return this.props.prices[select];
	}

	render() {

		const {amount, product} = this.state;

		const calculators = this.props.currencies.map(currency => ( 
			<Cash key={currency.id} cash={amount} ratio={currency.ratio} title={currency.title} 
			 price={this.selectPrice(product)} />
		))

		return(
			<>
				<div>---------------- Kantor -------------------- </div>
				<div className="app">
					<label> Wybierz produkt:
						<select value={product}
							onChange={this.handleSelect} > 
							<option value="electrcity">prąd</option>
							<option value="gas">benzyna</option>
							<option value="oranges">pomarańcze</option>
						</select>
					</label>
					<br/>
					<label>	
						<input type="number"  
						 value={this.state.amount}
						 onChange={this.handleChange} 
						/> {this.insertSuffix(product)}
					</label>
					{calculators}
				</div>
			</>
		)
	}

}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root3"));

//-----------------------------------------------------------------------------
//Wróżba
class Wrozba extends React.Component {

	state = {
		inputValue: "",
		option: "",
		options:  [
			"Pierwsza",
			"Druga",
			"Trzecia"
		]
	}

	handleShowOption = () => {
		const max = this.state.options.length;
		let liczba = Math.floor(Math.random()*(max));
		this.setState({
			option: this.state.options[liczba]
		})
		console.log(`poszlo: ${this.state.options[liczba]}`)
	}

	handleAddOption = () => {
		if(this.state.inputValue === "") return alert('wpisz cos');
		const options = [...this.state.options]
		options.push(this.state.inputValue)
		//sposob 2 powyższych dwóch linijek:
		//const options = this.state.options.concat(this.state.inputValue);
		this.setState({
			options,
			inputValue: ""
		})
	}

	handleInputChange =(e) => {
			this.setState({ 
				 	inputValue: e.target.value ,
			});
	}

	render() {

		return (
			<>
				<div>---------------- Wrozba -------------------- </div>
				<button onClick={this.handleShowOption}>Zobacz wróżbę </button>
				<br/>
				<input type="text" 
					value={this.state.inputValue} 
					onChange = {this.handleInputChange}/>
				<button onClick={this.handleAddOption} >Dodaj wrozbę</button>
				<br/>
				<h1>{this.state.option}</h1>

			</>
		)
	}
}

ReactDOM.render(<Wrozba />, document.getElementById("root4"));


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Konwencja nazenictwa, nazewnictwo

handleSubmit() - 
hamdle - obsługa
on - event, zdarzenie
//Submit - na potwierdzenie
handleLoginClick() {} - obsługa logowanie poprzez kliknięcie
handleFormSubmit() {} - potwierzenie wypełnienia formulaża
buttonClicked() {} - przycisk kliknięty (bez handle)





//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// Kurs "React dla średnio zaawansowanych"

// Koleś pisze proste aplikacje w https://codesandbox.io/
// Poleca urzywanie  https://styled-components.com/

// W codesandbox trzeba dodać to przez Add dependency (wpisać styled-component 
// i wybrac pierwszy jaki sie pojawi).
// Do projektu dodajemy:
import styled from 'styled-components'

//Definicja najprostrego przycisku:
const Button = styled.button`
  background: red;
  color: white;
`

//Który urzywam po prostu tak:
<Button>Przycisk</Button>

//------------------------------------------------------------
// REDUX
Filmik nr 4 - React dla średnio zaawansowanych
Aby w sandboxie skorzystać z Redux, trzeba go dodac w dependensis, wpisując react-redux
oraz redux



Redux MIDDLEWARES - takie wstrzyknięcie pomiędzy wykonanie akcji a reduserem,
  funkcje w których możemy dodać logikę.

//------------------------------------------------------------
HOOKS
// Polecane zajżenie na dokumentację:
	https://reactjs.org/docs/hooks-intro.html
//oraz stronę:
	https://wattenberger.com/blog/react-hooks

Do Hooks należą funkcje:
useState, useEffect, które pobieram z biblioteki "react":
	import React, { useState, useEffect } from "react";


Zamiast komponentu stanowego, tworze komponent bezstanowy:
ClassComponentExample extends React.Component | 
                                              |
                                              |

Zamiast 
	this.setState({ data }); 
używam:
	setData({ data });



//------------------------------------------------------------





//------------------------------------------------------------






//------------------------------------------------------------
