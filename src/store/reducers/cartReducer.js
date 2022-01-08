import actionTypes from '../actions/actionTypes';

const initCart = {
    numberCart: 0,
    Carts: []
}

const cartReducer = (state = initCart,action)=>{
    switch (action.type){
        case actionTypes.GET_NUMBER_CART:
            return{
                ...state
            }
        
        case actionTypes.ADD_CART:
            if (state.numberCart===0){
                let item = {
                    pid: action.payload.pid,
                    quantity: 1,
                    title: action.payload.img,
                    price : Number.parseFloat(((Math.round(action.payload.price * 100) / 100) * (1 - action.payload.discount/100)).toFixed(2))
                }
                state.Carts.push(item)
            }
            else{
                let check =false
                state.Carts.map((item,key)=>{
                    if (item.pid === action.payload.pid){
                        state.Carts[key].quantity++
                        check=true
                    }
                })
                if (check===false){
                    let item = {
                        pid: action.payload.pid,
                        quantity: 1,
                        title: action.payload.img,
                        price : Number.parseFloat(((Math.round(action.payload.price * 100) / 100) * (1 - action.payload.discount/100)).toFixed(2))
                    }
                    state.Carts.push(item)
                }
            }
            return {
                ...state,
                numberCart: state.numberCart+1
            }
        case actionTypes.INCREASE_QUANTITY:
            state.numberCart++
            let id = action.payload //Paylod la id san pham muon tang so luon
            state.Carts.map((item,key)=>{
                if (item.pid === id){
                    item.quantity++
                }
            })
            return {
                ...state
            }

        case actionTypes.DECREASE_QUANTITY:
            let id = action.payload
            state.Carts.map((item,key)=>{
                if (item.quantity>=1 && item.pid ===id){
                    item.quantity--
                }
            })
            let arr = state.Carts.filter(item => item.quantity!==0)
            state.Carts = arr
            return {
                ...state
            }
    }
}