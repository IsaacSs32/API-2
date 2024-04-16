export default function Login() {
    return (
        <div className="h-screen bg-visionai flex justify-center items-center italic">
            <div className="flex h-screen items-center">
                <div className="flex flex-col">
                    <div id="esquerda" className="rounded-l-3xl border-solid border-2 bg-white h-96 w-96 flex flex-col items-center shadow-2xl shadow-visiona">
                        <div className="text-2xl bg-white mt-8 font-bold">Olá!</div>
                        <div className="bg-white">Entre com a sua conta</div>
                        <label htmlFor="i1" className="pt-3 bg-white pr-56 font-medium">Usuario</label>
                        <input className="rounded-2xl bg-white p-1 w-72 border-solid border-visiona border-2 hover:p-1.5 hover:w-80 transition-all" type="text" id="i1" placeholder="Entre com o seu usuário" />
                        <label htmlFor="i2" className="pt-7 bg-white pr-60 font-medium">Senha</label>
                        <input className="rounded-2xl bg-white p-1 w-72 border-solid border-visiona border-2 hover:p-1.5 hover:w-80 transition-all" type="password" id="i2" placeholder="Entre com o sua senha" />
                        <div className="flex flex-row mt-4">
                            <input type="checkbox" id="c1" />
                            <label htmlFor="c1" className="text-xs pl-1 text-black">Lembrar de mim.</label>
                            <div>
                                <p className="text-xs pl-20 text-visiona opacity-75"><a href="">Esqueceu a senha?</a></p>
                            </div>
                        </div>
                        <div>
                            <button className="border-solid border-visiona border-2 rounded-lg bg-visiona w-32 p-1 mt-4 hover:bg-white hover:text-visiona hover:p-1.5 hover:w-36 transition-all text-white text-bold ">Login</button>
                        </div>
                        <div className="flex flex-row text-sm mt-4">
                            <p className="text-black">Não tem conta?<a className=" text-visiona opacity-75" href=""> Criar</a></p>
                        </div>
                    </div>
                </div>
                <div id="direita" className="flex flex-col gap-4 justify-center items-center bg-visionai2 h-96 w-80 rounded-r-3xl shadow-2xl shadow-visiona ">
                    <div id="texto"className="flex flex-col justify-center items-center gap-4">
                    </div>
                </div>
            </div>
        </div>
    );
};
// blur-sm hover:blur-none transition ease-in duration-300
{/* <h3 className="flex flex-col justify-center items-center text-white font-semibold pl-2">
Bem vindo de Volta!
</h3> */}
{/* <p className="flex flex-col justify-center items-center text-white pl-4 text-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, enim non aperiam quod cum ex similique vero aut numquam voluptate praesentium unde, asperiores amet. Obcaecati similique ab corrupti doloremque ex?</p> */}