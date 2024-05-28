import { useParams } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import SideBar from "../Components/BlogComponents/BlogHomeItems/SideBar";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result[0]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!data) return <div>Loading...</div>;

  const { title, image, author, published_date, reading_time, content } = data;

  return (
    <div>
      {/* <div className="py-8 bg-white text-center text-white px-4">
        <h2 className="text-5xl lg:text-5xl leading-snug font-bold mb-1 text-white">
          {title}
        </h2>
      </div> */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              style={{ width: "900px", height: "600px", marginRight: "150px" }}
              src={image}
              alt={title}
              className="w-full mx-auto rounded"
            />
          </div>
          <h2 className="text-4xl mt-8 font-bold mb-4 text-green-700 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-xl mb-6">{content}</p>
          <p className="text-xl mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            autem excepturi quod unde dolorem aperiam, doloribus, expedita
            ratione esse voluptatum adipisci consequuntur libero. Cum architecto
            ipsum repudiandae officiis id blanditiis. Autem ipsum assumenda
            nostrum aliquid dolores minus asperiores consequatur non, eos
            debitis laborum fugiat. Distinctio, nam. Quasi consectetur ipsum
            possimus nisi aspernatur corporis quia rerum, dignissimos, unde
            sequi doloremque in. Eaque officiis odit culpa voluptas distinctio
            ipsa nesciunt quos laborum quo qui nisi explicabo, molestias atque,
            libero dolore, suscipit praesentium natus eveniet veritatis vitae!
            Officia odit eos vitae modi nam! Fuga, esse consequuntur. Eligendi
            ipsum unde hic quam, alias esse repudiandae reiciendis? Perspiciatis
            rerum vitae, consectetur molestias quasi suscipit! Inventore esse
            quasi tempore quos voluptates dicta minus nam suscipit placeat. Nisi
            omnis, nihil doloremque ipsum numquam labore accusamus, deleniti
            voluptatum eligendi culpa itaque sint. Voluptate autem sunt,
            obcaecati ducimus veritatis voluptatum perspiciatis cum, odit
            molestiae vitae commodi dicta nihil ipsum. Nemo, natus ullam,
            quaerat inventore voluptas tempora voluptatem hic aspernatur iusto
            accusantium, necessitatibus vel non modi veritatis repellendus sint
            et. Cumque accusantium illo unde! Eligendi excepturi beatae itaque
            illo voluptas? Assumenda, consequuntur est! Vero numquam veritatis
            nihil ipsam amet ea blanditiis deleniti unde animi dicta nesciunt
            quas error sit tempore voluptates aspernatur doloremque, tenetur
            exercitationem. Inventore ipsum rem id fugit. Incidunt esse
            expedita, laboriosam voluptas labore quidem! Id ut porro nobis
            impedit natus eaque! Aliquam culpa hic eveniet, praesentium
            accusantium magni quas provident. Atque aliquam ratione quam autem
            ipsum ullam! Corporis exercitationem cumque ex facilis tenetur
            nostrum incidunt cum illum. Neque reiciendis ipsa officiis omnis
            optio qui repellendus ipsum. Sed nostrum explicabo ipsa ipsam nobis.
            Ex labore perferendis porro doloremque. Dolore veniam id odio
            commodi magni tempore quam ab perspiciatis, error iusto tenetur
            illo, aspernatur tempora corrupti natus facilis ad perferendis
            impedit reiciendis delectus aliquam maxime, accusamus inventore!
            Dicta, et! Doloremque, ab illum. Porro molestias id repellendus quod
            voluptate, facilis unde nobis consequuntur aperiam soluta aliquam
            expedita harum, et sequi quis cumque assumenda officiis facere
            eligendi voluptas. Quos, culpa consequatur. Doloremque autem,
            tenetur earum exercitationem quos voluptate eaque totam rem.
            Blanditiis quibusdam fugit sapiente corporis, incidunt quasi,
            voluptate iure minus voluptatem nulla amet in asperiores itaque sint
            iusto eligendi deserunt? Hic laborum praesentium quaerat eum animi
            aspernatur porro ducimus quo fuga vel voluptas sit aperiam dolore,
            architecto est quae dolor autem cum odio. Expedita quasi, nesciunt
            laboriosam repudiandae delectus consequatur. Eius, eligendi
            consectetur tenetur, qui vero totam porro perspiciatis explicabo
            incidunt quisquam consequuntur architecto. Corrupti commodi voluptas
            beatae totam deserunt dolore delectus voluptatum hic possimus nemo
            sit, alias vitae nulla? Eos veniam accusantium asperiores id at,
            labore perspiciatis impedit a exercitationem minus autem, soluta
            possimus quae quam quisquam facere. Enim tempore ea aliquid
            doloribus vero recusandae vel architecto repudiandae. Rem. Beatae
            odio eos ad repudiandae velit, dolor hic, ea accusantium corporis
            quam porro neque, error quaerat dignissimos nesciunt labore laborum
            sed cupiditate quisquam vel culpa sint! Minima rerum iste fugiat?
            Sit, debitis provident ut vero blanditiis soluta ducimus magnam
            dolores nihil! Laboriosam tenetur rem facilis natus labore adipisci
            quos maxime, cum sed eos excepturi, repellendus est debitis aliquid
            voluptatem quae! Eaque ea fuga sit, nihil sequi facere veritatis,
            reiciendis corporis nesciunt vel eius at obcaecati necessitatibus
            repellendus blanditiis dicta eligendi quaerat quo! Voluptatum fugit
            est vero doloribus ad voluptate obcaecati. Ex, molestias. Earum
            soluta eaque natus sint praesentium officiis recusandae voluptatibus
            odio excepturi officia fugit voluptatum ut non consequatur quisquam,
            id provident at voluptates quae enim quidem accusamus impedit sequi?
            Numquam ex praesentium deleniti impedit doloribus unde? Odit debitis
            quam voluptatum exercitationem iure minus! Blanditiis, aut. Illo, et
            molestias! Incidunt fugit suscipit asperiores perspiciatis quos
            provident officiis unde. Quibusdam, dicta.
          </p>
        </div>
        <div className="lg:w-1/5">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
