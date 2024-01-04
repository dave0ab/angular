import React from 'react';

export const YourComponent: React.FC = () => {

  return (
    <div className="container-fluid h-100 mt-5">
      <div className="row justify-content-center h-100">

        <div className="col-md-0 col-xl-1 order-lg-1"></div>

        <div className="col-md-4 col-xl-2 chat order-last order-lg-2">
          <div className="card mb-sm-3 mb-md-0 contacts_card">
            <div className="card-header">
              <h1 className="chat-list-title">All User</h1>
            </div>
            <div className="card-body contacts_body ">
              <ul className="contacts chatList">
                {alluser.map(presentation => 
                  presentation.userName != check && 
                  (<li key={presentation.id}>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <div className="rounded-circle user_img text_inside_circle">
                          {presentation.userName.substring(0,1)}
                        </div>
                      </div>
                      <div className="user_info" onClick={() => goToChat(presentation.userName)}>
                        <div style={{marginTop: '1rem'}}>
                          {presentation.userName}
                        </div>
                      </div>
                    </div>
                  </li>)
                )}

              </ul>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
        ...
        // Continue to convert it like above
      </div>
    </div>
  );
}