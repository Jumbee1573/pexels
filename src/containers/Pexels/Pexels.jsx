import React, { Component } from "react";
// import axios from "axios";

import Header from "../../components/Header/Header";

import "./Pexels.scss";

class Pexels extends Component {
  state = {
    thePosition: false
  };
  // state = { result: [] };
  //   componentDidMount = () => {
  //     axios
  //       .get(`https://api.pexels.com/v1/curated?per_page=15&page=1`, {
  //         headers: {
  //           Authorization:
  //             "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
  //         }
  //       })
  //       .then(res => {
  //         this.setState({ result: res });
  //       });
  //   };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
  }
  render() {
    const { thePosition } = this.state;
    return (
      <>
        <Header thePosition={thePosition} />
        <div className="lorem">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quos et quod quidem! Quisquam autem ab molestiae. Iure similique
          eveniet repudiandae id dolore nihil tenetur voluptates cumque totam
          earum, dolores doloremque autem fugiat consectetur libero, esse natus
          voluptatum officia. Adipisci quasi, repellat obcaecati fuga blanditiis
          iste quibusdam ab eos, doloribus id corrupti. Debitis, corrupti
          veritatis aspernatur eum nihil odio beatae necessitatibus vitae
          quisquam. Nihil iste doloremque eaque ab delectus? Omnis vitae
          cupiditate soluta corrupti laborum suscipit eligendi atque veniam
          ipsam quis incidunt odit, ullam nisi quos asperiores tempora nobis
          labore voluptas adipisci alias autem. Nam ab sunt corporis aperiam
          consectetur incidunt tempore esse, repudiandae nostrum ullam atque
          quis voluptate nemo sit voluptas itaque. Unde, aperiam quisquam
          doloremque sed, aliquid quaerat voluptates numquam obcaecati
          consectetur commodi ipsam expedita. Consectetur, neque ratione!
          Pariatur explicabo consequuntur, officia dolorum ad illum eveniet.
          Consequatur minima pariatur nulla unde nostrum eius soluta facilis at!
          Ratione, quaerat eaque impedit voluptatibus fugit voluptas iusto
          repellat. Ab, animi. Nam eos dolor voluptate adipisci molestiae ipsam
          laborum reprehenderit non pariatur debitis quibusdam ullam amet
          praesentium porro harum dolores ad nesciunt consequuntur ipsa,
          perspiciatis illum. Doloremque dolore inventore fugiat assumenda
          minima nostrum est quaerat distinctio, aut, nemo vel maiores. Adipisci
          quis corrupti, dolorem, dicta recusandae consectetur ad unde
          voluptatibus qui quo deserunt temporibus, itaque voluptatum facere
          minima alias! Blanditiis earum saepe non vero libero cupiditate
          placeat quis fugiat beatae et atque perferendis dolorem, assumenda
          doloremque consectetur ratione! Minima fuga tempore quasi voluptatum
          quos alias nihil voluptates illo, a magnam culpa nisi veniam quaerat
          nobis architecto impedit magni! Exercitationem laudantium accusantium
          illo, molestiae sit odit soluta suscipit, repudiandae debitis hic
          dignissimos eos facilis quidem beatae magni ea laboriosam quam dolor
          voluptas incidunt mollitia accusamus id sapiente dolore. Amet
          voluptatibus perferendis expedita repellat ex provident, quae
          veritatis omnis? Quas illum repudiandae cum amet tenetur optio dicta,
          laboriosam inventore nobis, unde, distinctio perspiciatis voluptates
          aperiam. Veritatis, fuga accusantium fugiat quisquam magni aspernatur
          porro laboriosam debitis obcaecati ratione inventore aperiam pariatur
          incidunt libero, voluptas repellat. Laudantium obcaecati earum, ab
          excepturi ipsa enim voluptatibus cupiditate hic temporibus illo neque
          accusamus velit eaque culpa quae, eum sint, impedit iste deleniti
          maiores perferendis. Tenetur ea esse quas nesciunt perspiciatis
          excepturi, voluptas corporis. Alias cumque officiis voluptates
          recusandae, itaque maxime! Perspiciatis distinctio officiis provident
          illo inventore commodi hic minima atque nostrum laboriosam quia
          dolorum eius omnis vel perferendis asperiores, similique corrupti
          autem amet expedita cupiditate deserunt velit. Labore eius hic magni
          modi praesentium veritatis ratione iure numquam quae placeat,
          obcaecati, a doloremque dignissimos rem nobis ipsa, nostrum in
          cupiditate minima incidunt totam facere. Harum veniam impedit
          blanditiis consequatur iste ex, id culpa. Eligendi pariatur,
          aspernatur veniam explicabo inventore veritatis doloribus tempore fuga
          molestias minima, aperiam blanditiis! Provident odit qui fuga
          consequuntur odio animi sit nihil ad rerum est ab beatae adipisci
          reprehenderit delectus soluta, reiciendis obcaecati esse fugit iusto.
          Molestiae tenetur voluptatum quas reprehenderit possimus eveniet
          consequuntur, modi odio quia voluptatibus nostrum doloribus quasi
          repellat ipsa, esse obcaecati. Eligendi modi cumque nostrum neque
          repellat, delectus obcaecati deleniti provident, vel velit deserunt
          temporibus expedita quae autem, ea labore pariatur minima odit alias
          magni facere doloremque voluptatem! Facilis sapiente, neque, est
          accusamus consequuntur atque odit numquam animi quo recusandae illo
          tempore fugit quasi eveniet voluptate ducimus blanditiis delectus
          nobis quisquam impedit accusantium cum dignissimos modi! Deleniti enim
          ut doloremque perferendis nihil quae natus beatae consequatur?
          Officiis ratione impedit deleniti consectetur non et odio. Voluptate
          ducimus cupiditate deserunt deleniti minima? Sed blanditiis ab at
          laborum soluta illo autem asperiores cum iste atque, animi veritatis
          ut ea totam quidem saepe id sapiente sit voluptatum. Provident
          suscipit aliquam, asperiores hic laborum, adipisci neque obcaecati,
          quis facere vitae assumenda porro minima magnam modi. Optio minus
          praesentium ut totam similique asperiores cupiditate consequuntur
          placeat reprehenderit repudiandae iste molestias tenetur amet
          consequatur perferendis aspernatur nam possimus id ipsum reiciendis
          sequi eum, aliquam cumque. Velit voluptatem ipsam, dolores, suscipit
          veritatis possimus beatae architecto aliquid alias eos obcaecati,
          maiores fugiat vero officiis repellendus laboriosam saepe cum iste
          optio consequatur expedita placeat quasi? Deserunt commodi iste hic
          velit quibusdam, nostrum maxime earum adipisci sapiente beatae autem
          voluptas libero fuga, culpa quo a omnis, sunt voluptate. Provident
          vitae id cupiditate earum sint repellat? Architecto doloribus, veniam
          voluptas maiores laborum earum nisi! Minima, harum. Numquam nisi nam
          fugiat libero, illum voluptatibus harum pariatur corporis voluptatum
          ipsum iure distinctio nulla vero vitae. Eos amet eligendi expedita
          obcaecati repudiandae excepturi beatae minima sed nobis ratione id ea
          iure saepe, accusantium odio alias, officiis facilis. Expedita
          accusantium repudiandae, eius facilis id nobis nihil cupiditate
          ducimus voluptatem? Maiores provident odit delectus similique magni
          cupiditate rem itaque at quia dignissimos praesentium ratione expedita
          vero obcaecati, non illum dolores, veritatis amet voluptas labore
          exercitationem assumenda error doloribus? Repellendus omnis reiciendis
          minima rem excepturi consectetur magnam inventore, nemo quas a
          deleniti est aperiam veritatis blanditiis minus nihil nulla soluta
          ipsum cum maiores. Minus voluptates, eius vitae, quod quis veniam esse
          perferendis vel quasi asperiores inventore officia harum corrupti,
          accusamus porro sapiente ratione labore. Officiis recusandae
          voluptatem eius suscipit mollitia itaque id deleniti ipsam, sapiente
          at. Asperiores, consequatur eius? Est velit molestiae consectetur
          iusto. Et, amet eius. Neque error cumque delectus beatae dolor facere
          atque unde non mollitia temporibus laboriosam pariatur voluptas,
          voluptatum illum sint excepturi animi ad! Vel placeat maxime id quas!
          Ullam, doloremque! Beatae ratione pariatur sunt eos molestiae odit
          commodi nam. Vel doloribus porro doloremque omnis odio officiis,
          temporibus facere? Illum in quisquam ipsum molestias tempore
          blanditiis debitis velit ex, quis dignissimos asperiores possimus
          officia veniam! Sint neque voluptates nobis consectetur quod adipisci
          quae, unde, ipsa minima, repellendus aperiam iusto iure nesciunt.
          Totam, consectetur quos. Vero saepe placeat eum doloribus voluptatum.
          Aut, tempore. Ad nostrum et earum deserunt est saepe amet quasi
          voluptas! Iste veritatis eum a, voluptate magni tenetur necessitatibus
          est aspernatur explicabo velit repudiandae delectus impedit natus
          molestias modi architecto eius consequatur laborum nesciunt? Minima
          voluptatibus atque ipsam quo distinctio dicta odio ducimus est quaerat
          fuga. Ratione dolor beatae veritatis at repellendus eum asperiores
          atque magni impedit hic quam reprehenderit voluptate sed omnis velit
          mollitia, nobis perferendis provident deleniti, libero perspiciatis
          recusandae vero! Autem quos eveniet error voluptatum repellendus
          temporibus dolor accusantium voluptates, quae velit cupiditate sint
          earum expedita culpa fuga iste beatae minima labore quaerat, tenetur
          repellat est natus reprehenderit et! Sapiente neque illo quisquam
          ducimus odio, totam animi ut doloremque consequatur reprehenderit
          itaque pariatur dolore repellendus voluptatum inventore ullam odit
          laboriosam exercitationem molestias est sint maxime eius tempore
          dolorem. Sit iure fuga obcaecati libero culpa, iste voluptates ducimus
          cupiditate velit numquam nemo tenetur inventore delectus consequatur
          praesentium esse aut et temporibus facilis dignissimos atque alias
          nam, odio quam! Illo libero nobis distinctio ducimus pariatur saepe
          facilis amet, reiciendis repellendus maxime molestiae ullam
          dignissimos sit, iusto possimus aliquam! Sed ipsa aliquam voluptatem
          obcaecati odit omnis error, consectetur, facilis debitis officiis esse
          alias fugiat eligendi asperiores autem nihil? Distinctio saepe
          deserunt molestias nobis pariatur doloribus, a iusto earum labore
          voluptates. Vero dolore debitis ipsum alias voluptates quibusdam,
          voluptatum ex porro numquam error repellendus asperiores. Numquam,
          recusandae blanditiis et quibusdam rerum animi consectetur
          consequuntur itaque. Consectetur, corporis ab. Fugiat culpa vero dicta
          nulla, esse blanditiis dolorem accusamus enim nam est. Nulla, ullam.
          Ducimus temporibus omnis voluptate iste, eos itaque esse eaque
          laboriosam velit magni, ea, tempore ipsa quis consectetur saepe vel
          expedita quaerat necessitatibus. Rerum aut facere odit deleniti
          quibusdam blanditiis at ratione labore error aliquid, distinctio porro
          exercitationem praesentium sequi consectetur delectus fugit aperiam
          illum doloribus quisquam voluptate quidem laudantium. Quo earum
          perferendis illo facere, sunt ducimus pariatur quod non modi
          architecto a soluta, quidem mollitia! Nostrum ratione autem quidem cum
          sint illum in minus repudiandae consequatur nisi accusantium suscipit
          porro, nihil veniam! Deleniti repellat vero harum suscipit consectetur
          labore, quos perferendis culpa, fugit sequi quidem. Placeat illum
          blanditiis nulla veniam nihil quisquam omnis dolores ipsum architecto.
          Nam nihil nulla in unde tenetur? Blanditiis cupiditate, aliquam quas
          sapiente quod aut dignissimos amet deserunt ea eos! Molestias dolor
          dolorum aspernatur sequi recusandae blanditiis ratione, voluptates,
          nobis ab, iusto fugit nulla tempora velit! Sit odio culpa vitae
          deserunt ratione similique mollitia quas, consequuntur voluptas. Quas
          similique aspernatur fugit eum aperiam ea nesciunt! Dolore in aliquam
          veritatis tenetur recusandae repudiandae beatae tempore atque pariatur
          magni unde, provident ex? Minima quas pariatur delectus nulla quae ex,
          atque necessitatibus non, aspernatur laudantium quidem vero, a
          provident? Voluptatem, dolorum repudiandae pariatur, nesciunt minima
          placeat delectus hic consectetur fugit velit voluptates repellat
          eveniet odio nam fugiat. Perferendis libero aspernatur debitis ratione
          porro harum consectetur cum odit fuga. Laborum quisquam culpa et, ipsa
          vero magnam repellendus quod voluptas molestias placeat velit hic vel,
          accusamus dolore corrupti earum debitis dolores praesentium. Magni
          sequi beatae vel itaque quisquam magnam tenetur quam recusandae
          molestias, eius voluptate suscipit deleniti similique. Amet
          consequatur tempora perferendis ullam aspernatur, eaque praesentium
          facere iste culpa nemo voluptatem, placeat vel vitae beatae ratione
          molestias sunt, animi consequuntur obcaecati nisi veniam at!
          Consectetur in earum at eveniet illum maxime corporis dicta,
          consequatur dolorem ex autem architecto voluptates, odio molestias
          dolore ea, adipisci quia? Vel maxime similique quidem velit nam
          ducimus voluptates doloremque, sint molestias qui optio quas. Labore
          obcaecati doloribus eos vel dignissimos excepturi dicta ratione facere
          facilis possimus necessitatibus omnis commodi molestias eius quasi
          vero, eligendi earum optio corrupti. Similique, voluptatibus. Rerum
          quod consectetur distinctio corrupti sed necessitatibus laudantium.
          Earum illo officiis consectetur obcaecati a doloribus dolorem laborum
          totam nam, sed ipsa quod dolor odit praesentium tempora ipsum.
          Aspernatur dolorem, laudantium necessitatibus libero facilis tenetur
          voluptatem voluptatum, possimus quo quidem excepturi expedita eveniet
          repellendus fuga? Repellendus inventore harum ducimus ratione deserunt
          fugiat maiores. Temporibus saepe tenetur, dignissimos officiis nisi
          aspernatur quos cumque facilis distinctio blanditiis provident cum
          modi fugiat doloribus esse sed odio necessitatibus natus a? Soluta
          ratione aut enim tempore exercitationem at animi sunt assumenda, culpa
          quam. Saepe cupiditate at fuga iste consectetur amet perspiciatis
          temporibus obcaecati enim optio animi aut architecto rerum recusandae
          repudiandae totam dignissimos quia beatae veritatis, voluptatibus
          molestiae magnam quisquam sunt quidem. Laborum sed fugiat ut
          perspiciatis modi qui quos nobis, recusandae possimus. Aperiam
          asperiores dolorem dicta quaerat. Quis dicta temporibus voluptatibus
          eos ad officiis ratione, et voluptatem aperiam architecto nobis optio
          perferendis esse a quod consectetur dolores voluptatum mollitia nulla
          quidem eveniet, expedita culpa recusandae modi! Fugiat reiciendis
          aperiam, quae quas eum accusantium repudiandae maxime et? Rem
          provident, praesentium optio quis repudiandae reprehenderit quo porro
          ex ratione veritatis, blanditiis illum! Vero, laudantium recusandae.
          Numquam laudantium rerum at eveniet, ut quibusdam reiciendis aperiam
          omnis excepturi, veritatis laborum? Exercitationem dolore aliquid
          doloribus, molestiae modi nobis sapiente in perferendis veritatis a
          blanditiis nemo placeat odio quas aliquam dicta fugit rem voluptas
          harum, reiciendis repudiandae. Tenetur blanditiis hic reprehenderit et
          iste omnis voluptatibus atque. Optio, neque quia. Corporis facilis
          architecto veritatis. Id amet quibusdam nesciunt voluptates. Ducimus
          voluptate veritatis consequatur nisi labore modi numquam, perferendis
          repudiandae quaerat ut ratione impedit nobis rerum cum, qui ullam.
          Vero placeat odio dignissimos, perspiciatis praesentium ducimus porro
          itaque qui quisquam. Molestiae consequuntur nulla perspiciatis,
          voluptatibus iusto eius repellendus fugiat non nesciunt, et delectus
          ex nemo quas sint, necessitatibus explicabo? Sunt nam delectus eveniet
          quo fuga corrupti dolorum beatae perspiciatis earum mollitia. Atque
          eos sit, obcaecati magni laboriosam accusamus assumenda numquam,
          aliquid qui culpa veritatis odio esse officiis consequatur quaerat
          corporis molestiae harum est quod. Saepe id accusantium iste
          voluptatem. Commodi quidem sit, temporibus laboriosam ipsum ipsa hic
          iure repudiandae quaerat aperiam quas reiciendis labore autem!
          Voluptatibus est cupiditate nam laudantium debitis numquam, voluptate
          nulla officia et ea sunt explicabo quam quibusdam, dolorem autem
          obcaecati. Expedita perferendis facere aspernatur cumque atque
          molestiae tempore libero corrupti, eaque itaque quae eius nisi nemo
          nesciunt ab sit alias culpa doloribus minima ea, iusto provident, odit
          magnam? Facere tenetur quod amet voluptates eos distinctio culpa sed
          hic ex, in debitis aliquam ab magni minus quis ut ducimus illo nobis.
          Laudantium magni asperiores, impedit sequi sint vel dolorem error
          reiciendis, debitis voluptates incidunt consectetur iure provident
          iusto tempore dicta cumque, doloribus soluta. Aliquam exercitationem
          pariatur vero odio animi, perspiciatis repudiandae ullam atque
          corrupti, explicabo molestiae numquam omnis quis similique vel
          perferendis! Deleniti voluptates odio reprehenderit laborum quo natus
          esse in?
        </div>
      </>
    );
  }
}

export default Pexels;
