// import {} from "../actions";
import { ALL_EVENTS, FILTER_BY_CATEGORY, FILTER_BY_GENDER, FILTER_BY_LOCATION } from "../actions";
  
  const initialState = {
    all_events: [{
        id: 1,
        name: "torneo 1",
        start_date: "05/07/2022",
        end_date: "08/07/2022",
        img: "https://escueladebaloncestoenbogota.com/wp-content/uploads/2021/10/liga-d-baloncesto-nba-960x677.jpg",
        category: "U16",
        gender: "Femenino",
        city: "Medellín",
        contact_name: "Pepito",
        contact_email: "pepito@gmail.com",
        inscription_fee: "100000 COP",
        confirmed_teams: ["Equipo 1", "Equipo 2", "Equipo 3"],
        description: "Por motivo del 5 aniversario del club realizaremos este torneo, el sistema de juego sera de todos contra todos y clasificaran los 4 mejores equipos, todos los equipos deben contar con dos unformes, uno blanco y otro de color, esperamos que disfruten de este torneo y de la ciudad de Medellín",
        awards: null
    },
    {
        id: 2,
        name: "torneo 2",
        start_date: "05/07/2022",
        end_date: "08/07/2022",
        img: "https://escueladebaloncestoenbogota.com/wp-content/uploads/2021/10/liga-d-baloncesto-nba-960x677.jpg",
        category: "U16",
        gender: "Masculino",
        city: "Medellín",
        contact_name: "Pepito",
        contact_email: "pepito@gmail.com",
        inscription_fee: "100000 COP",
        confirmed_teams: ["Equipo 1", "Equipo 2", "Equipo 3"],
        description: "Por motivo del 5 aniversario del club realizaremos este torneo, el sistema de juego sera de todos contra todos y clasificaran los 4 mejores equipos, todos los equipos deben contar con dos unformes, uno blanco y otro de color, esperamos que disfruten de este torneo y de la ciudad de Medellín",        
        awards: null
    },
    {
        id: 3,
        name: "torneo 3",
        start_date: "02/11/2022",
        end_date: "06/11/2022",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczzvrpzpWr3oSGW85mTLKePnEzZX1w6v8kQ&usqp=CAU",
        category: "U21",
        gender: "Masculino",
        city: "Bogotá",
        contact_name: "Pepito",
        contact_email: "pepito@gmail.com",
        inscription_fee: "100000 COP",
        confirmed_teams: ["Equipo 1", "Equipo 2", "Equipo 3"],
        description: "Bienvenidos al torneo 3, esperamos que se diviertan mucho",
        awards: "500.000 COP"
    }],
    all_events2: [{
        id: 1,
        name: "torneo 1",
        start_date: "05/07/2022",
        end_date: "08/07/2022",
        img: "https://escueladebaloncestoenbogota.com/wp-content/uploads/2021/10/liga-d-baloncesto-nba-960x677.jpg",
        category: "U16",
        gender: "Femenino",
        city: "Medellín",
        contact_name: "Pepito",
        contact_email: "pepito@gmail.com",
        inscription_fee: "100000 COP",
        confirmed_teams: ["Equipo 1", "Equipo 2", "Equipo 3"],
        description: "Por motivo del 5 aniversario del club realizaremos este torneo, el sistema de juego sera de todos contra todos y clasificaran los 4 mejores equipos, todos los equipos deben contar con dos unformes, uno blanco y otro de color, esperamos que disfruten de este torneo y de la ciudad de Medellín",
        awards: null
    },
    {
        id: 2,
        name: "torneo 2",
        start_date: "05/07/2022",
        end_date: "08/07/2022",
        img: "https://escueladebaloncestoenbogota.com/wp-content/uploads/2021/10/liga-d-baloncesto-nba-960x677.jpg",
        category: "U16",
        gender: "Masculino",
        city: "Medellín",
        contact_name: "Pepito",
        contact_email: "pepito@gmail.com",
        inscription_fee: "100000 COP",
        confirmed_teams: ["Equipo 1", "Equipo 2", "Equipo 3"],
        description: "Por motivo del 5 aniversario del club realizaremos este torneo, el sistema de juego sera de todos contra todos y clasificaran los 4 mejores equipos, todos los equipos deben contar con dos unformes, uno blanco y otro de color, esperamos que disfruten de este torneo y de la ciudad de Medellín",        
        awards: null
    },
    {
        id: 3,
        name: "torneo 3",
        start_date: "02/11/2022",
        end_date: "06/11/2022",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczzvrpzpWr3oSGW85mTLKePnEzZX1w6v8kQ&usqp=CAU",
        category: "U21",
        gender: "Masculino",
        city: "Bogotá",
        contact_name: "Pepito",
        contact_email: "pepito@gmail.com",
        inscription_fee: "100000 COP",
        confirmed_teams: ["Equipo 1", "Equipo 2", "Equipo 3"],
        description: "Bienvenidos al torneo 3, esperamos que se diviertan mucho",
        awards: "500.000 COP"
    }]
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_BY_LOCATION:
            let events = state.all_events
            let location = action.payload
            let eventsFiltered = location === 'all' ? events : events.filter((e) => e.city === location)

        return {
            ...state,
            all_events: eventsFiltered
        }
        case FILTER_BY_CATEGORY:
            let events2 = state.all_events
            let category = action.payload
            let eventsFiltered2 = category === 'all' ? events2 : events2.filter((e) => e.category === category)

        return {
            ...state,
            all_events: eventsFiltered2
        }
        case FILTER_BY_GENDER:
            let events3 = state.all_events
            let gender = action.payload
            let eventsFiltered3 = gender === 'all' ? events3 : events3.filter((e) => e.gender === gender)

        return {
            ...state,
            all_events: eventsFiltered3
        }
        case ALL_EVENTS:
           let allEvents = state.all_events2
        return {
            ...state,
            all_events: allEvents
        }
      default:
        return { ...state };
    }
  }
  