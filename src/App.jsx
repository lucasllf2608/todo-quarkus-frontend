import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Importa a árvore de rotas que criamos no passo anterior
import AppRoutes from './routes';

// Importa o seu store configurado (ajuste o caminho se a sua pasta store estiver em outro local)
import store  from './store'; 

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* O AppRoutes vai decidir se mostra o Login, as Categorias ou os Produtos */}
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;