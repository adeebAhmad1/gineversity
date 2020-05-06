import React, { Component, Fragment } from 'react';
import '../style.css';

class index extends Component {
    render() {
        const { list } = this.props;
        if (list && list.length > 0) {
            return list.map(item => {
                return <div key={item._id} className="col-12 p-4" style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px', backgroundColor: '#ecf0f1', alignItems: 'center' }}>
                    <div className="col-12" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid #dcdde1' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '1000px', backgroundColor: '#f9ca24', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <h4 style={{ fontWeight: '700', color: 'white', marginTop: '3px' }}>{item.postedBy && item.postedBy.name ? item.postedBy.name[0] : ''}</h4>
                        </div>
                        <div className="mr-auto ml-3 mt-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h6 style={{ fontWeight: '600' }}>{item.postedBy ? item.postedBy.name : ''}</h6>
                            <h6 style={{ color: 'grey', fontWeight: '400' }}>{item.topicId ? item.topicId.name : ''}</h6>
                        </div>
                        <span className="fa fa-share mr-3" style={{ fontSize: '16px', color: 'grey' }}></span>
                        <span className="fa fa-ellipsis-h" style={{ fontSize: '20px', color: 'grey' }}></span>
                    </div>
                    <div className="col-12 p-0">
                        {item.feed && <p style={{ fontWeight: 500, fontSize: '16px', paddingTop: '24px' }}>{item.feed}</p>}
                    </div>
                    {item.url && <img src={item.url} style={{ width: '100%', marginBottom: '0px' }} alt="post" className="comm-img" />}
                    <div className="col-12 p-0" style={{ paddingTop: '12px', marginTop: '24px', borderTop: '1px solid #dcdde1', marginBottom: '12px' }} />
                    <div className="col-11 p-0" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <h6 className="link-comm"> <span className="fa fa-check-square-o mr-2 mt-1"></span><span>Approve</span></h6>
                        <h6 className="link-comm"> <span className="fa fa-comments mr-2 mt-1"></span>Comment</h6>
                        <h6 className="link-comm"> <span className="fa fa-share-square mr-2 mt-1"></span>Share</h6>
                    </div>
                </div>
            });
        } else return <Fragment />
    }
}

export default index;