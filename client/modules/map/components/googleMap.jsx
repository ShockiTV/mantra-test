import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

const googleMap = ({markers}) => (
    <section style={{height: "100%", width: "500px"}}>
      <GoogleMapLoader
          containerElement={
          <div
            style={{
              height: "100%",
              width: "500px"
            }}
          />
        }
          googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{lat: -25.363882, lng: 131.044922}}
          >
            {markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                />
              );
            })}
          </GoogleMap>
        }
          />
    </section>
);

export default googleMap;
