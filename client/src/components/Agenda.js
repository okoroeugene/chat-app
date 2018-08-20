import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Footer extends Component {
	constructor() {
		super();
		this.state = {
			photos: [],
			isLoaded: false
		}
	}

	render() {
		return (
			<main>
				<section id="hero_in" class="general">
					<div class="wrapper">
						<div class="container">
							<h1 class="fadeInUp"><span></span>My agenda</h1>
						</div>
					</div>
				</section>

				<div class="container margin_60_35">

					<div class="row">
						<div class="col-md-9">
							<div class="box_general">
								<div id="calendar"></div>
							</div>
						</div>
						<div class="col-md-3">
							<div id="external-events">
								<h5>Draggable Events</h5>
								<div class='external-event'><i class="icon_mug"></i> Coffe Break</div>
								<div class='external-event'><i class="icon_mic_alt"></i> Meeting</div>
								<div class='external-event'><i class="icon_easel"></i> Lesson</div>
								<div class='external-event'><i class="icon_pencil-edit"></i> Exam</div>
								<p><input type='checkbox' id='drop-remove' /> <label for='drop-remove'>Remove after drop</label></p>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default Footer;
