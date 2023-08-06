import "./Dashboard.css";
import image_7 from "..\\src\\assets\\images\\image 7.png";

export default function Dashboard(){

    return (
        <div className="dashboard">
            <div className="div">
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="programming-platform">
                        <span className="text-wrapper">Programming Platform</span>
                        <span className="span"> for Kids</span>
                    </div>
                    
                    <div className="rectangle-2" />
                    <div className="programming-platform">
                        <span className="text-wrapper">Programming Platform</span>
                        <span className="span"> for Kids</span>
                    </div>
                    <img className="image" alt="Image" src={image_7} />
                    <div className="rectangle-3" />
                    <p className="courses-codegame">
                        <span className="text-wrapper-2">Courses</span>
                        <span className="text-wrapper-3">&nbsp;&nbsp;</span>
                        <span className="text-wrapper-2">CodeGame</span>
                        <span className="text-wrapper-3">&nbsp;&nbsp;</span>
                        <span className="text-wrapper-2">Practice&nbsp;&nbsp;</span>
                        <span className="text-wrapper-3">Dashboard</span>
                    </p>
                    <img className="img" alt="Image" src="image 18.png" />
                </div>
                <div className="overlap">
                    <div className="overlap-2">
                        <h1 className="h-1">Albert Einstein</h1>
                        <img className="image-2" alt="Image" src="image 12.png" />
                    </div>
                    <div className="text-wrapper-4">Student Rating: 23</div>
                    <div className="text-wrapper-5">Rank: Novice</div>
                    <img className="image-3" alt="Image" src="image 17.png" />
                </div>
                <img className="capture" alt="Capture" src="capture-7.png" />
                <img className="image-4" alt="Image" src="image 19.png" />
                <div className="text-wrapper-6">Upcoming events</div>
            </div>
        </div>
    )
}
