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

/*
//Instaluje CRA globalnie poleceniem:
    npm install create-react-app --global
//Uwaga, jeżeli chcę korzystać z projektów TypeScriptowych, 
//to nie zalecana jest ta instalacja, można ją odinstlawoać poleceniem:
    npm uninstall -g create-react-app

//Tworze nowy projekt poleceniem:
    npx create-react-app nazwa-katalogu
//Powstanie nowy katalog.

//Tworzenie nowego projekty TypeScript:
npx create-react-app front --template typescript
// więcej na https://create-react-app.dev/docs/adding-typescript/

//Po pomyslnej instalacji można ten projekt uruchomić poleceniem:
λ npm start

//Wyświetli się adres strony: http://localhost:3000/ i można otworzyć ją w przegądarce

//Tworzenie wersji produkcyjnej:
λ npm run build
*/

VITE
/*
Tworzenie nowego projektu React TypeScript Vite
npm create vite --template-swc-ts
npm i


downgrade 18 to 17.0.2
npm uninstall react react-dom
npm install react@17.0.2 react-dom@17.0.2

Change main.ts:
// react 17.0.2
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)



npm i react-chat-widget
npm i openai


npm i --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
*/


THREE
npx create-react-app . --template minimal
npm i @react-three/fiber @react-three/drei @react-three/postprocessing

dokumentacja do react three:
https://docs.pmnd.rs/react-three-fiber/tutorials/events-and-interaction


//Miałem sytuację, ze po wywołaniu npx create-react-app nazwa-katalogu, projekt zawierał tylko: node_modules, package.json, package-lock.json
// Oraz komunikat o przestarzałej wersji polecenia.
//Pomogło wywołanie polecenia: npm install -g create-react-app


//Fajna wtyczka do efektór na napisach (najeżdzanie, pojawianie się) https://www.react-reveal.com/examples/common/zoom/

// Fajną gierkę warior zrobił Wojciech Rosiński   https://warriors.networkmanager.pl/warriors/

// biblioteka do Float, czyli "chmurek" z opisami elemntu lub pływającego elemtu 3D. https://floating-ui.com/docs/useListNavigation

// najpopularniejse biblioteki do formularzy:
// https://redux-form.com/
// https://formik.org/

// jakies stylwanie przycisków: https://chakra-ui.com/docs/components/button

// jakaś biblioteka fo fetch() https://swr.vercel.app/

// fejkowe dane urzytkowników https://randomuser.me/api/

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
 
ReactDOM.render(app, document.getElementById('root'));

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

<p contentEditable="true"> 	Ten tekst można edytować </p>
<p contentEditable={true}> 	Ten tekst można edytować </p>

<SidebarMenu/>



                                  |     const element = {
const element = (                 |         type: 'div',
    <div className='title'>       |         props: {
        Cześć!                    |     	    className: 'title',
    </div>                        |             children: 'Cześć!'
);                                |         }
                                  |     };








//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

//kliknięcie na napis w h1:
<button onClick={function () { alert("wykryto klik") }}>Kliknij</button>
//lub to samo z arrowFunction
<button onClick={() => alert("wykryto klik")}>Kliknij</button>
//to samo, ale przekazujemy wcześniej zdefiniowaną funkcję:
const handleClick = () => alert("klik")
<button onClick={handleClick}>Pierwszy artykuł</button>
//button przekazujący argumenty do handleClick(argumenty):
	<button
		onClick={this.handleClick.bind(this, argumenty)}
		onClick={() => this.handleClick(argumenty)}
		disabled={jakasFlaga ? false : true  } //wyszarzenie przycisku
	> OK </button>

/*
  ┌─────────────────┐         ┌─┐
  | input           |         |v| checkbox
  └─────────────────┘         └─┘                       */
  
	state = {
		inputValue: ""
	}

	handleInputChange =(e) => {
			e.preventDefault() //zabezpiecza przed przeładowaniem się strony
			this.setState({ 
				 	inputValue: e.target.value ,
			});
	}

	render() {
		return (
			<label>
				Wpisz cos
				<input type="text" // "checkbox", "emali", "password", "number"
					name="name"
					placeholder="Sugerowany tekst"
					value={this.state.inputValue} 
					onChange = {this.handleInputChange}
				/>
			</label>
		)
	}


/*  ┌─────────────────┐
    | textarea        |
    |                 |
    └─────────────────┘  */

	<label>
		napisz coś o mieście
		<textarea value={this.state.text}
				onChange={this.handleTextChange}
		>
		</textarea>
	</label>
	

/* ┌─┐
   |v| checkbox
   └─┘             */
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


/* ┌─────────┬─┐
   |         |v| select  (pole kombi)
   └─────────┴─┘                        */
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
			<option value="0">0</option>
			<option value="1">1</option>
			<option value="5">5</option>
			<option value="more">Więcej</option>
		</select>
	</label>


//biblioteki do tworzenia formularzy: 
https://formik.org/docs/overview
https://www.npmjs.com/package/yup
// Jak tego urzywać: https://www.youtube.com/watch?v=HNJSX31bzbs


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
	//wyodrębnianie na piechotę:
	const age = player.age;
	//destrukturyzacja:
	const {age, name} = player; //można też użyć let zamist const  
	const {age : playerAge, name : playerName } = player; //nadawanie nowych nazw


	const players = ["Jacek", "Tomasz", "Jarek"]
	//destrukturyzacja tablicy:
	const [user1, user2, user3] = players;  //musimy napisać nazy 
	let [,,user3] = players;  //wyodrebnienie TYLKO trzeciego
	//Wyodrebniam user1 i w "users" jest reszta elementów (w formie krótszej tablicy):
	let [user1, ...users] = players; 

    
	const ItemListP1 = props => (  //bez destrukturyzaji propsow
		<li>{props.name} - {props.example}</li>
	)
    //to samo ale destrukturyzacja na propsach
	const ItemListP2 = ({name, example}) => (
		<li>{name} - {example}</li>
	)
	


//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------


//komponent daty
<time>{(new Date()).toString()}</time>
const date = new Date();  //w date jest: Tue Jul 27 2021 08:26:28 GMT+0200 (czas środkowoeuropejski letni) {}
date.toDateString()             //=  "Tue Jul 27 2021"



class Zegar extends Component {
    state = {  time: this.getTime() }

    getTime() {
        const currentTime = new Date();
        return ( {
                hours: currentTime.getHours(),
                minutes: currentTime.getMinutes(),
                seconds: currentTime.getSeconds()
        })
    }

    setTime() {
        const time = this.getTime()
        this.setState({ time })
    }

    componentDidMount() { this.interval = setInterval(() => this.setTime(), 1000) }

    render() {
        const { hours, minutes, seconds } = this.state.time
        return ( <div> {hours}:{minutes}:{seconds} </div>);
    }
}

setTimeout(()=> console.log("minelo 5 sek"), 5000) //wysyła za 5 sekund

const intervalId = setInterval(() => { console.log("Hejka") }, 1000)  //wywołuje co sekundę   lub this.intervalId = w komponencie klasowym
clearInterval(intervalId); //ady wyłączyć interwał



/*-------------------------------------------------------------------------------------------------
   #                                                                  #
   #                                                                  #
   #  #    ###    ### ##    ####     ###    ####     ###    ####    #####   #    #
   # #    #   #   #  #  #   #   #   #   #   #   #   #   #   #   #     #     #   #
   ##     #   #   #  #  #   #   #   #   #   #   #   #####   #   #     #      # #
   # #    #   #   #  #  #   ####    #   #   #   #   #       #   #     #       #
   #  #    ###    #  #  #   #        ###    #   #    ###    #   #      ##    #
                            #                                               #
-------------------------------------------------------------------------------------------------*/
// * stateless functional component, - SFC, komponent bezstanowy
// * stateful functional component - komponent stanowy


// W strefie kursów jest:
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
		<TutajJeszczeKoejnyKomponent />
	</div>
 )

//Nie wiem dla czego, ale Szczecinski zaproponował taką składnię zamiast wstawiania komponentu:
ReactDOM.render( React.createElement(Tweet, null), document.getElementById('Komponent_SFC'));
// wynik ten sam co ten:
ReactDOM.render( <Tweet /> , document.getElementById('Komponent_SFC'));





//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//komponenty

//komponent bezstanowy (funkcyjny)
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
					<h1>Piewszy komponent stanowy {this.state.number}</h1>
				</div>
			)
		}
	}
	ReactDOM.render(<App2 />, document.getElementById('root'))

//------------------------------------------------------------
//powyższe można połączyć ze sobą:

	const ZebraneApp = () => {
		return (
			<>  {/*to jest to samo co <React.Fragment> */}
				<App1 />
				<App2 />
			</>
		)
	}

	ReactDOM.render(<ZebraneApp />, document.getElementById('root'))

//------------------------------------------------------------
//komponent stanowy (klasowy) rozbudowany:
{
	class DodajCyfre extends React.Component {
		constructor(props) {
			super(props); //wymagane przekazanie propsów do rodzica
			this.state = {
				text: "",
				messageIsActive: false,
			}
			this.handleClick = this.handleClick.bind(this)
		}

		handleClick(e) { // może być przypisany this w konstruktorze, albo funkcja strzałkowa, 
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
			// w if() dopisze ewentualne dodatkowe właściwości albo je zmieniam
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
	
		componentDidMount() {} // metoda wykona się (tylko raz) po render, czyli, gdy już wygenerowany zostanie cały DOM
		componentDidUpdate() {} // wykonuje się po każdej aktualizacji render
		componentWillUnmount() {} //taki destruktor

	}
	
	const PanelResult = (props) => {    // poprzez props, otrzymałem przekazany argument
		return (
			<h1>{props.text}: {props.children}</h1> //to co jest między znacznikami, jest przekazane jako props.children
		)
	}
}	

/*-----------------------------------------------------------------------------

   #   #    ####     ####    #   #
   #   #   #    #   #    #   #  # 
   #   #   #    #   #    #   # #  
   #####   #    #   #    #   ##
   #   #   #    #   #    #   # #
   #   #   #    #   #    #   #  #
   #   #    ####     ####    #   #

-----------------------------------------------------------------------------*/
//przechowywanie stanu (raczej typy prymitywne)
	const [stan, funkcja] = React.useState(stanPoczatkowy);  

{
	const [counter, setCounter] = useState(0);
	const handlerClick = () => setCounter(counter + 1);
	return (
		<div onClick={handlerClick}>
			<p>counter: {counter}</p>
		</div>
		);
}
{
	const [object, setObject] = useState({ a: 0, b: 0 });
	const handlerClick = () => setObject({ ...object, a: object.a + 1 });
	return (
		<div onClick={handlerClick}>
			<p>a: {object.a}</p>
			<p>b: {object.b}</p>
		</div>
	);
}
//------------------------------
//Zastępuje montowanie, odmontowywanie komponentów
useEffect(funkcja, [tablicaZaleznosci]);

const handleMouseMove = e => setCounter(e.clientX);

useEffect(() => {  //funkcja zawierająca imperatywny kod
	window.addEventListener('mousemove', handleMouseMove); //to wykona się raz, albo gdy zmieni się coś w tablicy zależności
	return () => { //componentWillUnmount  gdy komponent staje sie nie aktywny 
		alert('Komponent odmontowany');
		window.removeEventListener('mousemove', handleMouseMove);
	}
}, [props.rerenderCounter]); //dopiero gdy zmieni sie któryś z elementów tablicy, nastąpi componentDidUpdate


useLayoutEffect( () => {
 () => console.log('Funkcja wywoła się PRZED wyrenderowaniem DOM');
}, [] );


    // Przykład
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
    }, []);



//------------------------------
useCallback
	// memonizacja funkcji - czyli zapamietanie jakiejś funkcji
	// referencja funkcji staje sie stabilna, żeby nie renderowała się ponownie

//Przykład 1:
	//mamy w komponencie jakąś funkcję, która wywołuje się przy każdym przebudowaniu komponentu (bo korzysta z tej funkcji jakis inny useEffect)
const handler = () => {
	console.log(counter);
}
//Aby ta funkcja była stworzona tylko raz (miałą stabilna referencję), trzeba ja opakować w useCallback:
const handler = useCallback(() => {
	console.log(counter);
}, []);    //tablica zależności mówi, kiedy ponownie ma być stworzona funkcja



//------------------------------
React.memo 
	// coś, zeby nie przebudowywać elementów listy, przy każdym renderze. Urzywany czesto razem z useCallback
//Przykład:
const ItemList = React.memo(({ items, onDelete}: Props) => {
	console.log('Item is render');;
	return <ul> {items.map( (item, index) => <li ley={item}> <button onClick={( () => onDelete(index) )}>Usuń</button> </li>)} </ul>
});



//------------------------------
useMemo 
	// memonizacja zmiennej (podobnie jak useCallback, ale dla zmiennej)
	// Przeładuej się TYLKO, gdy zmieni się jego stan w tablicy zależności

	const finalValue = useMemo( () => veryHardCalculation(counter), [counter])	



//------------------------------
useRef
	// Można używać na dwa sposoby. Po pierwsze, pozwala na bezpośredni dostęp do elementu DOM, dzięki czemu możemy nim manipulować. 
	// Czyli zamiast robienia const element = document.querySelector('input');
	// Po drugie, może zachować dowolną zmienną wartość w swojej właściwości .current, która nie zmienia się między renderowaniami.
	// Można wykorzystac ją, do zapamiętania poprzedniej wartości.
	// Zmiana wartości parametru useRef nie spowoduje ponownego renderowania komponentu.
// troszkę więcej na ten temat: https://love-coding.pl/hooki-react-useref-tutorial/

//Przykład 1:
const HookExample = () => {    
    const inputEl = useRef<HTMLInputElement | null>(null);
    const paragraphEl = useRef<HTMLInputElement | null>(null);
    
    console.log("component has just rendered");

    return (
        <div className="App">
            <input ref={inputEl} type="text" /> {/* pole w którym wpisujemy tekst */}
            <div>
                <button onClick={() => {
                            paragraphEl.current.innerText = inputEl.current.value;  {/* Przepisanie wartosci z inputa do wyśweitlanej treści paragrafu, poprzez paragraphEl */}
                            inputEl.current.value = ""; {/* Czyszczenie pola input */}
                        }}>Display input value</button>
                <p ref={paragraphEl} >Display input value here </p>
            </div>
        </div>
    );
}



//------------------------------
//Własny Hook
import { useState, useEffect } from "react";
type UseUsersReturn = [string[], (name:string) => void, boolean];
const useUsers = (): UseUsersReturn => {
    const [users, setUsers] = setState<string[]>([]);
    const [isLoading, setIsLoading] = setState<boolean>(false);

    const addUser = (name: string) => {
        setIsLoading(true);
        setTimeout( () => {
            setUsers( prev => [...prev, name]);
            setIsLoading(false);
        }, 1000);
    }

    useEffect( () => {
        setIsLoading(true);
        setTimeout( () => {
            setUsers(['Marcin', 'Marian', 'Mateusz', 'Monika']);
            setIsLoading(false);
        }, 2000);
    }, [])

    return [user, addUser, isLoading];
}
export { useUsers }

// urzycie tego huka w komponencie:
import React from "react";
import { useUsers } from "./hook/setUsers" 
const Users = () => {
    const [users, addUser, isLoading] = useUsers();
    const handleNewUser = () => {
        const userName = prompt('Podaj imie');
        if(!userName) return;
        addUser(userName);
    }
    if(isLoading) return <h1>Trwa ładowanie...</h1>
    return
        <>
            <h1>Userzy </h1>
            <button onClick={handleNewUser}>Dodaj usera</button>
            <ul>
                {users.map( (user, index) => <li key={index}>{user}</li>)}
            </ul>
        </> 
}
export { Users }

// urzywamy kompnentu standardowo, czyli:

    <Users />

//Własny Hook -  przykałd 2
import { useState  } from "react";
const App = () => {                                          | To można zastąpić własnym hookiem
	const [toggled, setToggled] = useState<boolean>(false);  | const useToogle = (): [boolean, () => void] => {
	                                                         |		const [toggled, setToggled] = useState<boolean>(false);
		const toogle = () => {                               |		const toogle = () => {
		setToggled(prev => !prev);                           |			setToggled(prev => !prev);
    }                                                        | 		}
	                                                         |		return [toggled, toggle]
	const [toggled, toggle] = useToggle();					 | }

	return <div>
		<button onClick={toogle}>
			{toggled ? 'Minimalizuj' : 'Maksymalizuj'}
		</button>
		<p style={{
			height: toggled ? 'auto' : '20px',
			overflow: "hidden"
		}}> Jakiś długi tekst... </p>
	</div>
}






//------------------------------
useReducer
	// tworzenie lokalnego stanu w nieco inny sposób
	//film 146

// reducer - to funkcja która przyjmuje 2 argumenty:
// pierwszym jest aktualny stan, drugi argument to "akcja". Akcja to obiekt
// i zwraca NOWY stan na podstawie typu akcji

interface User { name: string; lastName: string; age: nuymber; }
const initialState: User = { name: 'Marcin', lastName: 'Grygierek', age: 28 }

interface ChangeNameAction {type: 'CHANGE_NAME', payload: string }   // type - co chcemy zmienić; payload -  w jaki sposób chcemy to zmienić (na co chcemy zmienić)
interface ChangeLastNameAction {type: 'CHANGE_LAST_NAME', payload: string }
interface IncrementAgeAction {type: 'INCREMENT_AGE' }
type UserAction { ChangeNameAction | ChangeLastNameAction | IncrementAgeAction }
const userReducer = (state: User, action: UserAction) => {
    switch (action.type) {
        case 'CHANGE_NAME':       return { ...state, name: action.payload }; 
        case 'CHANGE_LAST_NAME':  return { ...state, lastName: action.payload }; 
        case 'INCREMENT_AGE':     return { ...state, age: state.age + 1 }; 
        default:                  return state; 
    }
}

const App = () => {
    const [user, dispatch] = useReducer(userReducer, initialState); //dispatch - jest to metoda, która zawiera obiekt akcji, którą musimy przekazać

    return (
        <>  
            <h1>{user.name} {user.latName}, {user.age}</h1>
            <button onClick={ () => dispatch({type: 'CHANGE_NAME',      payload: 'Marian'})}      > Zmień Imię </button>
            <button onClick={ () => dispatch({type: 'CHANGE_LAST_NAME', payload: 'Marianowski'})} > Zmień Nazwisko </button>
            <button onClick={ () => dispatch({type: 'INCREMENT_AGE' })}                           > Zwiększ wiek</button>
        </>
    );
}


//------------------------------
useHistory  //- filmik 153
// poniższe trzy hooki wykorzystuje się do routingu

const Component = () => {
	const history = useHistory(); //aby uzyskać dostęp do historii 

	const handleOnClick = () => {
		const location = {
			pathname: '/redux',
			//ewentualnie inne parametry
		};
		history.push(location);
	}

	const handleOnClickBack = () => history.goBack(); //metoda do powracania do poprzedniej ścieżki

	return (
		<>
			<button onClick={handleOnClick}> Idz do strony </button>
			<button onClick={handleOnClickBack}> Powrót do poprzedniej strony </button>
		</>
	);
}

//------------------------------
useLocation  // - okrojona wersja useHistory

	const location = useLocation();  //domyślnie undefine
	const isActive = Boolean(location.state && location.state.isActive);

<p> Przesłana informacja: {String(isActive)} </p>

//------------------------------
useParms // - film 155

//załużmy że jakiś komponent ma:
	const[inputData, setInputData] = useState('');
	const history = useHistory();

	const handleOnClick = () => {
		const location = { 
			pathname: '/typeScript/${inputData}', //UWAGA, w Route będzie ścieżka: "/typeScript/:message"
		};
		history.push(location);
	}
	<button onClick={handleOnClick}> Wyślij parametr do StoryTypeScript </button>
// dane zostana wysłane jako parametr w pasku adresu

// w komponencie (zwykle w innym folderze), przechwycimy te parametry za pomocą useParams

	const paramsObject = useParams();

	<p> paramsObject.message </p> //tutaj zobaczymy odebrane parametry. Nazwa zależna od nazwy parametru w ścieżce



/*-------------------------------------------------------------------------------------------------
####                           #     ###                   #                    #  
#   #                          #    #   #                  #                    #  
#   #   ###    ####    ###   #####  #       ###   ####   #####   ###   #   #  #####
####   #   #       #  #   #    #    #      #   #  #   #    #    #   #   # #     #  
# #    #####   #####  #        #    #      #   #  #   #    #    #####    #      #  
#  #   #      #    #  #   #    #    #   #  #   #  #   #    #    #       # #     #  
#   #   ###    ### #   ###      ##   ###    ###   #   #     ##   ###   #   #     ##
-------------------------------------------------------------------------------------------------*/
ReactContext // - coś w stylu globalnych zmiennych
// film 139  React od podstaw

//Przykład od Gregierka, Klakulator 
// W komponencie głównym tworzymy Context, i przekazujemy ten kontekst jako .Provider
import { ChangeEvent, createContext, useState } from "react"
import { CalculatorForm } from "./CalculatorForm";

interface CalcualtorContextType {
    first: number;
    second: number;
    result: number | string;
    handleFirstChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSecondChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setOperationResult: (result: number | string) => void;
}
export const CalcualtorContext = createContext<CalcualtorContextType | null>(null);

export const CalculatrC = () => {
    const [first, setFirst] = useState<number>(0);
    const [second, setSecond] = useState<number>(0);
    const [result, setResult] = useState<number | string>(0);

    const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => { setFirst(Number(e.target.value)); }
	const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => { setSecond(Number(e.target.value)); }
    const setOperationResult = (operationResult: number | string) => { setResult(operationResult);  }

	return <div>
		<CalcualtorContext.Provider value={{
			first,
			second,
			result,
			handleFirstChange,
			handleSecondChange,
			setOperationResult,
		}}>
			<CalculatorForm /> {/* Przykład jednego komponentu ale może być ich wiele */}
		</CalcualtorContext.Provider>
	</div>
}

// -------------- zawartość CalculatorForm.tsx  który korzysta z tego konteksu, za pomocą useContext
import { useContext } from "react";
import { CalcualtorContext } from "./Calculator";

export const CalculatorForm = () => {
    const context = useContext(CalcualtorContext);               // wyciągnięcie 
    if(!context) return null;                                    // warunek trzeba dodać gdy przekazujemy funkcje (nie podajemy wartosci domyslnych)
    const {first, second, handleFirstChange, handleSecondChange} = context; // najwygodniej jest zdestrukturyzować potrzebne elementy
    return <>
        <input type="number" value={first} onChange={handleFirstChange} />
        <input type="number" value={second} onChange={handleSecondChange} />
    </>
}



//------------------------------------------------------------
//------------------------------------------------------------
/*------------------------------------------------------------
  ####              #
  #   #             #
  #   #   ###    ####  #   #  #   #
  ####   #   #  #   #  #   #   # # 
  # #    #####  #   #  #   #    #
  #  #   #      #   #  #   #   # #
  #   #   ###    ####   ####  #   #


zewnętrzna biblioteka do zarządzania przesyłanymi danymi. Film 157
instalacja:
	npm i redux

Główne założenia: 
- niemutowalność (tworzone nowe stany)
- centralizacja stanu w STORE

Przepływ danych:
                                  ┌──────────┐
                       ┌──────────┤  Action  ├────────┐
                       v          └──────────┘        |
┌──────────┐    ┌────────────┐    ┌──────────┐    ┌───┴────┐ 
│  Action  ├───>│ Dispatcher ├───>│  Store   ├───>│  View  | 
└──────────┘    └────────────┘    └──────────┘    └────────┘ 
Reducer - funkcja, która mówi storowi, jak ma być przygotowany nowy stan. 
Stor - jest dużym obiektem, zawierający podobiekty. Reducer zajmuje się zwykle jednym podobiektem


*/
//akcja w reduksie jest obiektem, który ma obowiązkowe pole type:
{
	type: ADD, //obowiązkowy element
	payload: { } //opcjonalny ładunek (treść)
}

ReduxTank - do asynchroniczności

//------------------------------------------------------------
//------------------------------------------------------------
/*------------------------------------------------------------
React router
//Filmik 102 (React od podstaw)
//Instalujemy go poleceniem:
	npm install react-router-dom@6
//Po zainstalowaniu, trzeba zaimportować kilka komponentów:
	import { BrowserRouter, Link } from 'react-router-dom';
//Następnie w komponent BrowserRouter "owijamy" jedno dziecko (najlepiej jeden <div>)
*/
	<BrowserRouter> 
		<div>
			...
		</div>
	</BrowserRouter> 
//Teraz zamist tradycyjnych linków: <a href="/start">Start</a>
//Wprowadzamy: <Link to="/start">Start</Link>
//Od tej pory, przejście na inny link, nie odświerza strony
//Mozna urzyać skróconej nazwy BrowserRouter, deklarując to w imporcie:
	import { BrowserRouter as Router, Link } from 'react-router-dom';
	<Router> 
		<div>
			...
		</div>
	</Router> 

//Kuba wspomina coś o Wuter 
//------------------------------------------------------------
/*
 ####                     #     #                 #                               #                          ###  ####    #  
 #   #                    #     # #               #                               #                         #   # #   #  # #
 #   # # ### ##### #    # #  #  ##     ####   #####     ####  # ###  ###   ###  #####  ###   ####  ###      #     #   #  # #
 ####  ##       #  #   #  # #  ##          # #    #     #   # ##    #   # #       #   #   # #   # #   #      ###  ####  #   #
 #     #       #    # #   ##    #      ##### #    #     #   # #     #   #  ###    #   ##### #   # #   #         # #     #####
 #     #      #      #    # #   #   # #    # #    #     ####  #     #   #     #   #   #      #### #   #     #   # #     #   #
 #     #     #####  #     #  #   ###   ### #  #####     #     #      ###   ###     ##  ###      #  ###       ###  #     #   #
                   #                                    #                                   ####
*/
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
			<li>{props.name} - {props.example}</li>
		)
	}

	class ItemListC extends React.Component {
		render() {
			return (
				<li>{this.props.name} : {this.props.example}</li>
			)
		}
	}

	ReactDOM.render(<ShoppingList />, document.getElementById('root2'))
//------------------------------
//Lista zakupów - z urzyciem hook
{
	const ShoppingList = () => {
		const [items] = React.useState({
			items1: 'ogórki',
			items2: 'jajka',
			items3: 'sok',
		})

		return (   
			<section>
				<h2>Lista zakupów: </h2>
				<ul>
					<li>{items.items1}</li>    {/*  pierwszy krok */}
					<ItemList name="element 1" />   {/*  drugi krok */}
					<ItemList name={items.items2} />   {/*  trzeci krok */}
					<ItemList name={items.items2} example={2 + 2} />
				</ul>
			</section>
		)
		
	}

	const ItemList = ({name, example}) => (
		<li>{name} - {example}</li>
	)
	
	ReactDOM.render(<ShoppingList />, document.getElementById('root2'))
}


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

//------------------------------
//to samo z hookami:
const Hooks = () => {
    const [text, setText] = React.useState("");
   
   const handleOnClick = () => (setText(text + Math.floor(Math.random() * 10)));

    return (
        <>
            <button onClick={handleOnClick}>Dodaj losową cyfrę</button>
            <h1>{text}</h1>
        </>
    );
};



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
{
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
}
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
{
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
}
//------------------------------------------------------------
//Proste wyświetlenie listy elementów z tablicy
//Part II
{
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
}
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
/*
handleSubmit() - 
hamdle - obsługa
on - event, zdarzenie
//Submit - na potwierdzenie
handleLoginClick() {} - obsługa logowanie poprzez kliknięcie
handleFormSubmit() {} - potwierzenie wypełnienia formulaża
buttonClicked() {} - przycisk kliknięty (bez handle)
*/




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
/*
Filmik nr 4 - React dla średnio zaawansowanych
Aby w sandboxie skorzystać z Redux, trzeba go dodac w dependensis, wpisując react-redux
oraz redux



Redux MIDDLEWARES - takie wstrzyknięcie pomiędzy wykonanie akcji a reduserem,
  funkcje w których możemy dodać logikę.
*/
//------------------------------------------------------------



//------------------------------------------------------------
//   #     #           #          
//   #     #    #      #          
//   #     #         #####    ### 
//   #     #   ##      #     #   #
//    #   #     #      #     #####
//     # #      #      #     #    
//      #      ###      ##    ### 
//------------------------------------------------------------

npm create vite@latest ./ -- --template react

// uruchamiamy poleceniem:

npm run dev

// instalacja tailwinda:
npm install -D tailwindcss
npm install -D tailwindcss postcss autoprefixer
//stworzenie pliku konfoguracyjnego dla tailwind
npm install --legacy-peer-deps -D tailwindcss postcss autoprefixer


// stworzenie pliku konfiguracyjnego
npx tailwindcss init

npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom


Logo można wygenerować na stronie logo.com

//------------------------------------------------------------
//   #   #                     #  
//   ##  #                     #
//   ##  #    ###    #   #   #####
//   # # #   #   #    # #      #
//   #  ##   #####     #       #
//   #  ##   #        # #      #
//   #   #    ###    #   #      ##
//------------------------------------------------------------

// Tworzenie projektu
npx create-next-app nazwaProjektu












//------------------------------------------------------------
