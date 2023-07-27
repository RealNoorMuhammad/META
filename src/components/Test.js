import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Test() {
  const [result, setData] = useState([]);

  const query = `query GetUserArticles($page: Int!){
        user(username: "ibizatoken"){
            publication{
                posts(page: $page){
                    title
                    brief
                    slug
                    coverImage
                }
            }

        }
    }
    `;

  const variables = { page: 0 };

  const getData = async () => {
    const data = await axios.post(`https://api.hashnode.com/`, {
      query,
      variables,
    });
    setData(data.data.data.user.publication.posts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="cards_landscape_wrap-2">
      <div className="mt-5 container">
        <div className="row">
          {result.map((item, index) => {
            return (
              <div key={item.id} className="col-xs-6">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="row">
                      <div className="col-6 mb-5">
                        <div className="image-box d-flex justify-content-center">
                          <img
                            width="360"
                            height="240"
                            src={item.coverImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-container">
                          <h3>Title: {item.slug}</h3>
                          <h6>Slug: {item.title}</h6>

                          <p>Brief: {item.brief}</p>
                          <button className="btn btn-primary">
                            {" "}
                            <Link to={`/detail/${item.slug}`} state={item}>
                              Read more{" "}
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Test;
