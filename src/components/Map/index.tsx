import * as React from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoidGJhbGRlY2NoaSIsImEiOiJjazdiNmYxa2swMTJzM2Vsa2FkZXBxNXVtIn0.siAnE1_GsbXpr7k80f2oCg' || '';
const initialState = {
    viewport: {
        height: 400,
        latitude: 37.776021,
        longitude: -122.4171949,
        width: 400,
        zoom: 14,
    },
};
type State = typeof initialState;
type Viewport = typeof initialState.viewport;

export default class Map extends React.Component<{}, State> {
    public state: State = initialState;

    public componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    public updateViewport = (viewport: Viewport) => {
        this.setState(prevState => ({
            viewport: { ...prevState.viewport, ...viewport },
        }));
    };

    public resize = () => {
        this.setState(prevState => ({
            viewport: {
                ...prevState.viewport,
                height: (window.innerHeight * 0.5),
                width: (window.innerWidth * 0.5),
            },
        }));
    };

    public render() {
        const { viewport } = this.state;
        return (
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={(v: Viewport) => this.updateViewport(v)}
            >
                <div style={{ position: 'absolute', right: 30, bottom: 30 }}>
                    <NavigationControl onViewportChange={this.updateViewport} />
                </div>
            </ReactMapGL>
        );
    }
}
