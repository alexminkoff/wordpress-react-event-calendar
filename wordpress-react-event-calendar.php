<?php
/*
Plugin Name:  WordPress React Event Calendar
Plugin URI:   http://alexminkoff.com/
Description:  Event Calendar for WordPress, built with React
Version:      1.0.0
Author:       Alex Minkoff
Author URI:   http://alexminkoff.com/
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  wordpress-react-event-calendar
*/

if ( ! defined( 'WPINC' ) )
	die;

define( 'WPREC_VERSION', '1.0.0' );

class WordPress_React_Event_Calendar
{
	/*
	Constructor
	*/
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'public_scripts' ), 10 );
		add_action( 'init', array( $this, 'register_shortcode' ) );
	}

	/*
	Enqueue scripts and styles
	*/
	public function public_scripts() {
		wp_enqueue_style( 'wprec-public', plugins_url( 'assets/public.css', __FILE__ ), array(), WPREC_VERSION, 'all' );
		wp_enqueue_script( 'wprec-public', plugins_url( 'assets/public.js' , __FILE__ ), array(), WPREC_VERSION );
	}

	/*
	Enqueue admin scripts and styles
	*/
	public function admin_scripts() {
		wp_enqueue_style( 'wprec-admin', plugins_url( 'assets/admin.css', __FILE__ ), array(), WPREC_VERSION, 'all' );
		wp_enqueue_script( 'wprec-admin', plugins_url( 'assets/admin.js', __FILE__ ), array(), WPREC_VERSION );
	}

	/*
	Register calendar shortcode
	*/
	public function register_shortcode() {
		add_shortcode( 'wprec', array( $this, 'shortcode' ) );
	}

	/*
	Display calendar
	*/
	function shortcode( $atts = [], $content = null, $tag = '' ) {
		if (isset($atts['id'])) {
			return '<div class="wprec-calendar" data-id="' . $atts['id'] . '"></div>';
		}
		return '';
	}
}

new WordPress_React_Event_Calendar;
