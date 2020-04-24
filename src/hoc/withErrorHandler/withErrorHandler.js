import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../Auxillary/Auxillary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                })
            })
        }
        state = {
            error: null
        };

        componentWillUnmount() {
            console.log('will unmount',this.reqInterceptor,this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        // componentWillMount() {
        //     axios.interceptors.request.use(req => {
        //        this.setState({
        //            error: null
        //        });
        //         return req;
        //     });
        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({
        //             error: error
        //         })
        //     })
        // }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            })
        };

        render() {
            return(
                <Auxillary>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Auxillary>
            )
        }
    }
};

export default withErrorHandler;
