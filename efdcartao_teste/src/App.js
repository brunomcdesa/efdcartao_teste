import "../src/css/styles.css";

function App() {
  return (
      <div classname="page-container">
        <main classname="main-container">
          <div classname="bgImage">
            <div>
              <div>

              </div>
              <div>
                <header classname="cabecalho">
                  <p classname="imgLogo">
                    <img src="https://s3.amazonaws.com/efdcartao.public/public/img/logo.png" alt="EFD Cartoes" height="70"/>
                    <h2>Login</h2>
                    <p>Efetue o login, ou   
                      <a href="https://hmlg.efdcartao.com.br/createAccount"> cadastre-se</a>
                      para uma nova conta.
                    </p>
                  </p>
                </header>
                <body>
                  <form id="formLogin" classname="formLogin">
                    <div classname="usuario">
                      <input type="text" name="email" placeholder="Usuário" />
                    </div>
                    <div classname="senha">
                      <input tupe="password" name="senha" placeholder="senha" />
                    </div>
                    <div>
                      <div classname="esqueceuSenha">
                        <a href="href=https://hmlg.efdcartao.com.br/forgot">Esqueceu a senha?</a>
                      </div>
                      <div classname="submit">
                        <button id="btnLogin" classname="btnLogin">
                          <i>icone</i>
                          Acessar
                        </button>
                      </div>
                    </div>
                  </form>
                </body>
              </div>
            </div>
          </div>
        </main>
        {/* <footer>
          <a classname="float">whatsapp</a>
        </footer> */}
      </div>
  );
}

export default App;
