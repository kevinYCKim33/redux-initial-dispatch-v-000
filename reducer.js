let state;

function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render();
}

function render(){
    document.getElementById('daiso').innerHTML = state.count
}

//just some random blargh to display initial state upon render
dispatch({type: '@@INIT'})
