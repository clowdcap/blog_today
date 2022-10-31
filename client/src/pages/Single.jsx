import React from 'react'
import Edit from './../img/edit.png'
import Delete from './../img/delete.png'
import { Link } from 'react-router-dom'

import Menu from './../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Img single" />

        <div className="user">
          <img src="https://avatars.githubusercontent.com/u/68341332?s=400&u=7a7c9980d5047112ab4f52f56f9572e50f389e2f&v=4" alt="" />
          <div className="info">
            <span>Jose</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad iusto dolores blanditiis aut natus officia, minima laudantium, incidunt suscipit laboriosam minus placeat consectetur! Natus quisquam non velit aspernatur explicabo aut autem possimus quae esse? Veritatis atque vitae distinctio sit earum amet ad quae soluta adipisci. Non sed adipisci, commodi repellat quis sint ratione voluptatum quo maxime alias, necessitatibus quod quasi. Esse, non. Sequi fuga placeat dolor dicta quis a dolores doloremque esse qui aliquid magnam minus amet eos suscipit impedit rem mollitia aliquam harum praesentium minima atque, voluptatibus sapiente itaque provident. Voluptate, molestias explicabo? Vitae debitis deserunt, praesentium mollitia ducimus esse nobis reiciendis quod ipsum odio nesciunt corporis, similique illum tempore temporibus cum cumque iusto aliquid culpa libero eius. Accusantium nulla omnis eius fugit debitis, cumque placeat voluptate doloribus deleniti quod natus nam fugiat ab blanditiis? Suscipit molestiae porro neque quam! Amet magnam consectetur, saepe labore dignissimos excepturi a assumenda dolores exercitationem quam. Quibusdam eaque odit neque facere unde in obcaecati, totam pariatur laborum adipisci iusto ipsum tempora suscipit dolores architecto, ratione quos quisquam. Ratione laudantium, exercitationem expedita molestiae recusandae rerum natus inventore suscipit temporibus totam facere voluptatibus alias porro, minima hic commodi? Adipisci, recusandae officia animi dolores beatae fugiat perferendis culpa quae odit. Illum est, quidem nobis, assumenda expedita voluptate ducimus ullam tempora animi at numquam quod suscipit a voluptates maiores, nostrum doloribus. Optio et nostrum non architecto eos nulla enim ex aperiam. Eius, laudantium quibusdam soluta voluptates molestiae, ipsam, quia amet consequatur nihil ratione ea id labore earum rem! Pariatur iste ipsa laudantium, veritatis qui blanditiis ea, commodi nostrum dolor quaerat illo eum corporis autem! Aperiam fugit laborum ab dolore consequuntur iste vero! Minima voluptate, nulla dolorum architecto, unde veritatis nam consequuntur commodi, voluptatem harum iure laborum temporibus accusamus aspernatur officia nisi iusto quo minus ullam aliquid. </p>

      </div>
      <Menu /> 
    </div>
  );
} 

export default Single