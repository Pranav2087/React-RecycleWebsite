import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { v4 as uuidv4 } from "uuid";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import Directions from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "./mapComponent.css";
import * as geolib from "geolib";
mapboxgl.accessToken =
  "pk.eyJ1IjoicHJhd25zMjMiLCJhIjoiY2xsdGZ5cTNuMHNldTNvcGhvZ2dlaWZybyJ9.neLDnnclkOhRO4h_zekaVg";

function MapComponent() {
  const containerId = uuidv4();
  const [apiData, setApiData] = useState([]); // State to store API data
  const loc = [];

  useEffect(() => {
    // Initialize the map when the component mounts
    const map = new mapboxgl.Map({
      container: containerId,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [153.021072, -27.470125],
      zoom: 10,
    });

    var directions = new Directions({
      accessToken: mapboxgl.accessToken,
    });

    var geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    map.addControl(directions, "top-left");
    const features = apiData.map((item) => ({
      type: "Feature",
      properties: {
        description: `<strong>Name:</strong><p>${item.Name}</p><strong>Opening-Hours:</strong><p>${item["Opening Hours"]}</p><strong>Contact:</strong><p>${item.Contact}</p>`,
        icon: "information",
      },
      geometry: {
        type: "Point",
        coordinates: [parseFloat(item.Longitude), parseFloat(item.Latitude)],
      },
    }));
    map.on("load", () => {
      map.addControl(geolocate, "top-left");
      geolocate.on("geolocate", (e) => {
        loc.push([e.coords.longitude, e.coords.latitude]);
      });
      map.addSource("places", {
        // This GeoJSON contains features that include an "icon"
        // property. The value of the "icon" property corresponds
        // to an image in the Mapbox Streets style's sprite.
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features,
        },
      });
      // Add a layer showing the places.
      map.addLayer({
        id: "places",
        type: "symbol",
        source: "places",
        layout: {
          "icon-image": ["get", "icon"],
          "icon-size": 2,
          "icon-allow-overlap": true,
        },
      });
      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on("click", "places", (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on("mouseenter", "places", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "places", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    // Clean up the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [containerId,apiData]);

  useEffect(() => {
    // Make the API request
    const queryString = new URLSearchParams({
      resource_id: "60dbf68b-7911-417b-8ae3-056700e681d8",
      limit: 5,
    }).toString();

    fetch(
      `https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search?${queryString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log("API Response:", responseData);

        if (responseData.success) {
          // Check if the response indicates success
          setApiData(responseData.result.records);
        } else {
          // Handle API errors here, e.g., display an error message
          console.error("API request error:", responseData.error);
        }
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  const handleDataItemClick = (Latitude, Longitude) => {
    if (loc != null) {
      const userCoordinates = {
        latitude: loc[0][1],
        longitude: loc[0][0],
      };
      const placeCoordinates = {
        latitude: Latitude,
        longitude: Longitude,
      };
      console.log(loc[0][0]);
      const distanceInMeters = geolib.getDistance(
        userCoordinates,
        placeCoordinates
      );
      const distanceInKilometers = geolib.convertDistance(
        distanceInMeters,
        "km"
      );

      alert(
        `The distance between your location and the clicked entry is approximately ${distanceInKilometers.toFixed(
          2
        )} km.`
      );
    } else {
      alert(
        "User location is not available. Please wait for location detection."
      );
    }
  };
  const calculateShortestDistance = () => {
    if (apiData.length > 0 && loc.length > 0) {
      const userLocation = { latitude: loc[0][1], longitude: loc[0][0] };
      let shortestDist = Number.MAX_VALUE;
      let closestEntry = null;

      apiData.forEach((item) => {
        const placeCoordinates = {
          latitude: item["Latitude"],
          longitude: item["Longitude"],
        };

        if (userLocation) {
          const distanceInMeters = geolib.getDistance(
            userLocation,
            placeCoordinates
          );
          if (distanceInMeters < shortestDist) {
            shortestDist = distanceInMeters;
            closestEntry = item;
          }
        }
      });

      // Convert the shortest distance to kilometers
      const shortestDistanceInKilometers = geolib.convertDistance(
        shortestDist,
        "km"
      );

      if (closestEntry) {
        alert(
          `The shortest distance is approximately ${shortestDistanceInKilometers.toFixed(
            2
          )} km from your location to ${closestEntry.Name}.`
        );
      } else {
        alert("No closest entry found.");
      }
    }
  };

  return (
    <>
    <div className="map-container" style={{ overflow: "hidden" }}>
      <div className="hmap">Where to recycle? - Find a way to drop off</div>
    </div>
    <div
      className="data-container-outer"
      style={{ position: "relative",top:'-50px', height: "200px", display: "block",left:'2%' }}
    >
      <div id="data-container" style={{ whiteSpace: "nowrap" }}>
        {apiData.map((item) => (
          <div
            key={item.id}
            className="data-entry"
            onClick={() =>
              handleDataItemClick(item["Latitude"], item["Longitude"])
            }
          >
            <strong className="singleEntries">Name: </strong>
            <span className="name-text">{item.Name} </span>
            <br />
            <strong className="singleEntries2">Address:</strong> {item.Address}
            <br />
            <strong className="singleEntries2">Opening Hours:</strong>{" "}
            {item["Opening Hours"]}
            <br />
            <strong className="singleEntries2">Latitude:</strong> {item["Latitude"]}
            <br />
            <strong className="singleEntries2">Longitude:</strong>{" "}
            {item["Longitude"]}
            <br />
          </div>
        ))}
      </div>
    </div>
    <div
      id={containerId}
      style={{
        width: "1240px",
        height: "65%",
        position: "relative",
        left: "8.5%",
        zIndex: "1",
        borderRadius:'10px',
      }}
    />
    <button
      style={{
        position: "relative",
        top:'-50px',
        left: "1165px",
        zIndex: "2",
      }}
      onClick={calculateShortestDistance}
    >
      Calculate Shortest Distance
    </button>
  </>
  
  );
}

export default MapComponent;
