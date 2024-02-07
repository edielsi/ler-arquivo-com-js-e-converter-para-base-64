var imagens = [];

var btn_enviar = document.querySelector('button[type=submit]')

btn_enviar.addEventListener('click', e => {
    e.preventDefault();
    converterImagem();
    apresentar_imagens()
})

function converterImagem() {
    //pegar arquivo do formulario
    var arquivo = document.getElementById('arquivo').files;

    //verificar se tem arquivo
    if (arquivo.length > 0) {
        
        //acessar o arquivo desejado
        var arquivo_enviado = arquivo[0];
  
        //instanciando o objeto que lê o arquivo
        var leitura = new FileReader();

        //converter leitura para formato dataurl
        leitura.readAsDataURL(arquivo_enviado);

        //carregar a imagem em base64
        leitura.addEventListener('load',(e)=>{

            //acessar o resultado do carregamento
            var arquivo64 = e.target.result;

            //atribuindo arquivo para download
            document.getElementById('baixar').href=arquivo64;

            //empurrar para o array o arquivo
            imagens.push(arquivo64);
        })

    } else {
        console.log('não tem')
    }
}

function apresentar_imagens() {

    let indice = 0;
    console.log(imagens.length)

    setInterval(() => {

        if (imagens.length >= (indice+1)) {
            //carregando a imagem no html
            document.getElementById('imagem').src = imagens[indice];
            indice++;
        } else{
            indice =0;
        }
    }, 1000);



}