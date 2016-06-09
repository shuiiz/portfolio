# Require any additional Compass plugins here:
# Set this to the root of your project when deployed:
css_dir = "assets/css"
sass_dir = "assets/sass"
images_dir = "assets/images"
# generated_images_dir = images_dir + "/sprites-generated"
# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded
# The environment mode. Defaults to :production, can also be :development
environment = :production
# Chrome needs a precision of 7 to round properly
Sass::Script::Number.precision = 7
# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false