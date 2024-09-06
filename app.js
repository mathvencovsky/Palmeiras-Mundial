function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == " ") {
        section.innerHTML = "<p>O PALMEIRAS AINDA NÃO GANHOU O MUNDIAL.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se titulos includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Cria um novo elemento div para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Descubra a verdade</a>
        </div>
      `;
        }
    }

    if (!resultados) {
        // Personaliza a mensagem com a palavra pesquisada
        resultados = `<p>Você pesquisou por "${campoPesquisa}". Será que o Palmeiras vai ganhar o Mundial procurando por isso? Tente outra palavra-chave amanhã!</p>`;
      }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }
