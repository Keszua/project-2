import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import './Map.css';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../contexts/search.context';
import { SimpleAdEntity } from 'types';
import { SingleAd } from './SingleAd';
import { apiUrl } from '../../config/api';

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect( () => {
        (async () => {
            const res = await fetch(`${apiUrl}/ad/search/${search}`);
            const data = await res.json();

            setAds(data);
        })();
    },[search]);

    return (
        <div className="map">
            {/* <h1>Skończyłem na T5D4 21:50</h1> */}
            <MapContainer center={[51.4097, 21.1301]} zoom={18} scrollWheelZoom={false}> 
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"           
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]} >
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>    
                    ))
                }
            </MapContainer>
        </div>
    );
};