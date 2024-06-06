import React from 'react'

interface DescriptionsProps {
    open: boolean;
    Close: () => void;
}

const Descriptions: React.FC<DescriptionsProps> = ({ open, Close }) => {

    if (!open) return null

    return (
        <div>
            <div className="descriptions">
                <div className="description-header">
                    <h1><i className="fas close-description-menu" onClick={Close}>&#xf104;</i>Descriptions</h1>
                </div>
                <div className="description-content">
                    <div className="saved-descriptions"></div>
                </div>
            </div>
            <div id="description-menu-overlay" onClick={Close}></div>
        </div>
    )
}

export default Descriptions