/**
 * Created by mostafazahran on 9/14/17.
 */
import React, {Component} from 'react';

export default class GoogleMap extends Component {

    ComponentDidMount = (map_div) => {
        if(!map_div) return;
        console.log(map_div);
        new google.maps.Map(map_div, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        })
    };

    render () {
        return (
            <div ref={ (map_div) => this.ComponentDidMount(map_div) }/>
        );
    }
}