import React from 'react';
import ContentClass from './ContentClass';
import HeaderClass from './HeaderClass';
import FooterClass from './FooterClass';

class AppClass extends React.Component {

    render() {

        return (
            <div>
                < HeaderClass />
                <hr />
                < ContentClass />
                <hr />
                < FooterClass />


            </div>


        );

    }

}

export default AppClass;